# 1. Use an official, minimal Python runtime
FROM python:3.10-slim

# 2. Set environment variables for optimized Python execution
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 3. Create a dedicated directory for the app
WORKDIR /app

# 4. (Optional) Install system dependencies needed for audio processing or heavy ML packages
# RUN apt-get update && apt-get install -y --no-install-recommends build-essential libsndfile1 && rm -rf /var/lib/apt/lists/*

# 5. Copy requirements first to leverage Docker layer caching
COPY requirements.txt .

# 6. Install dependencies without caching archives
RUN pip install --no-cache-dir -r requirements.txt

# 7. Copy the rest of the application code
COPY . .

# 8. Create a non-root user and grant ownership of the app directory
RUN adduser --disabled-password --gecos '' appuser && chown -R appuser /app
USER appuser

# 9. Expose the API port
EXPOSE 8080

# 10. Start the server (Consider Gunicorn for production instead of the Flask dev server)
CMD ["python", "main.py"]