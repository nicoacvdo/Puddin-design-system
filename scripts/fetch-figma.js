const axios = require('axios');
require('dotenv').config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = 'FHLbgwg9YYGidPM2iZnW8o';
const NODE_ID = '719-610'; // Swap with chart /light component ID

if (!FIGMA_ACCESS_TOKEN) {
  console.error('Error: FIGMA_ACCESS_TOKEN is not set in the environment.');
  process.exit(1);
}

async function fetchFigmaData() {
  try {
    // Fetch the specific node data
    const nodeResponse = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${NODE_ID}`, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN
      }
    });

    // Log the node data
    console.log('Figma node data for node ID', NODE_ID, ':', JSON.stringify(nodeResponse.data, null, 2));

  } catch (error) {
    console.error('Error fetching Figma data:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
}

fetchFigmaData(); 