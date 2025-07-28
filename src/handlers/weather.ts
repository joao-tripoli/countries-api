import { Request, Response } from 'express';

export async function getCurrentWeather(
  req: Request<{ location: string }>,
  res: Response
) {
  const location = req.params.location;

  try {
    const response = await fetch(
      `${process.env.WEATHER_API_URL}/current.json?q=${location}&key=${process.env.WEATHER_API_KEY}`
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || 'Invalid request');
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error:
        err instanceof Error ? err.message : 'Failed to fetch weather data',
    });
  }
}
