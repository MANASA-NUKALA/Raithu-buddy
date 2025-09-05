import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";

const DiseaseDetection = () => {
  const [model, setModel] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");

  // Load model
  const loadModel = async () => {
    try {
      const loadedModel = await tf.loadGraphModel(
        "/models/plant_disease_tfjs/model.json"
      );
      setModel(loadedModel);
      alert("✅ Model loaded successfully!");
    } catch (err) {
      console.error("Error loading model:", err);
      alert("❌ Failed to load model. Check console.");
    }
  };

  // Upload image handler
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Predict disease
  const predictDisease = async () => {
    if (!model) {
      alert("⚠️ Please load the model first!");
      return;
    }
    if (!preview) {
      alert("⚠️ Please upload an image first!");
      return;
    }

    const image = document.getElementById("uploadedImage");
    let tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .expandDims();

    const prediction = model.predict(tensor);
    const predictedClass = prediction.argMax(-1).dataSync()[0];

    const classes = ["Healthy", "Blight", "Rust", "Leaf Spot"];
    const diseaseName = classes[predictedClass] || "Unknown";

    setResult(`Disease: ${diseaseName}`);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        🌿 Plant Disease Detector
      </h2>

      <button
        onClick={loadModel}
        className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
      >
        Load Model
      </button>

      <div className="mt-6">
        <label className="block mb-2 text-green-900 font-semibold">
          Upload Image:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="p-2 border rounded-lg bg-white"
        />
      </div>

      {preview && (
        <div className="mt-6">
          <p className="text-green-800 font-medium">Preview:</p>
          <img
            id="uploadedImage"
            src={preview}
            alt="Uploaded"
            className="w-64 h-64 object-cover mx-auto rounded-lg shadow border-2 border-green-600"
          />
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={predictDisease}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Predict
        </button>
      </div>

      {result && (
        <p className="mt-6 text-lg font-semibold text-green-900">{result}</p>
      )}
    </div>
  );
};

export default DiseaseDetection;
