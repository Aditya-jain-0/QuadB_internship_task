const mongoose = require('mongoose');
const axios = require('axios');
const resSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
  });

const topResults= mongoose.model('topResults',resSchema)

const Data = async () => {
    try {
      const count = await topResults.countDocuments();
      if (count === 0) {
        const dataApi = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const results = Object.values(dataApi.data).slice(0, 10);
  
        const topres = results.map((item) => ({
          name: item.name,
          last: item.last,
          buy: item.buy,
          sell: item.sell,
          volume: item.volume,
          base_unit: item.base_unit
        }));
  
        await topResults.insertMany(topres);
        console.log("Data inserted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
Data();

module.exports = topResults;