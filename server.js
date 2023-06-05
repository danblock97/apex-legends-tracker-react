const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// API endpoint for searching player data
app.get("/search/:platform/:playerName", async (req, res) => {
  try {
    const platform = req.params.platform;
    const playerName = req.params.playerName;

    // Make a request to the Apex Legends API
    const response = await axios.get(
      `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${encodeURIComponent(
        playerName
      )}`,
      {
        headers: {
          "TRN-Api-Key": "03b5af3a-7aff-4150-9a91-8bb87df537cf", // Replace with your TRN API key
        },
      }
    );

    // Return the player data
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
