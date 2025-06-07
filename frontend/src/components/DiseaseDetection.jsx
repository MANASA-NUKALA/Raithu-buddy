import React, { useState } from "react";

function DiseaseDetection() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  }

  async function handleDetectClick() {
    if (!imageFile) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch("http://localhost:5000/detect-disease", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();
      setResult(data);
      console.log("Detection result:", data);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Crop Disease Detection</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {imagePreview && (
        <div style={styles.previewContainer}>
          <img src={imagePreview} alt="Crop Preview" style={styles.previewImage} />
        </div>
      )}

      <button onClick={handleDetectClick} style={styles.button} disabled={loading}>
        {loading ? "Detecting..." : "Detect Disease"}
      </button>

      {result && (
        <div style={styles.resultBox}>
          <h3 style={{ color: "#2e7d32" }}>Disease: {result.disease}</h3>
          <p style={{ color: "#1565c0" }}>Confidence: {result.confidence}%</p>
          <p style={{ color: "#6a1b9a" }}>Advice: {result.advice}</p>
        </div>
      )}

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  previewContainer: {
    margin: "20px 0",
  },
  previewImage: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "contain",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  resultBox: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #4caf50",
    borderRadius: "8px",
    backgroundColor: "#f0fff0",
  },
  error: {
    marginTop: "20px",
    color: "red",
  },
};

export default DiseaseDetection;
