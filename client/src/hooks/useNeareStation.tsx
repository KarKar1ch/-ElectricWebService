'use client'
import {useState} from "react";
import {IStation} from "@/types/StationsType";
import {IStationNear} from "@/types/StationsType";


export default function useNeareStation() {
    const [station, setStation] = useState<IStation | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const searchStation = async (filters: IStationNear) => {
        try {
            setLoading(true);
            setError(null);
            setStation(null);

            const lat = typeof filters.lat === 'string' ? parseFloat(filters.lat) : filters.lat;
            const lon = typeof filters.lon === 'string' ? parseFloat(filters.lon) : filters.lon;
            const kwt = typeof filters.filters.kwt === 'string'
                ? parseFloat(filters.filters.kwt)
                : filters.filters.kwt;

            if (Number.isNaN(lat) || Number.isNaN(lon) || Number.isNaN(kwt)) {
                throw new Error('Проверь lat, lon и мощность');
            }

            const params = new URLSearchParams({
                filters: JSON.stringify({
                    kwt,
                    type: filters.filters.type
                }),
                lat: String(lat),
                lon: String(lon)
            });

            const response = await fetch(
                `http://127.0.0.1:8000/stations/get_thebest_station?${params.toString()}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Ошибка запроса! status: ${response.status}`);
            }

            const result = await response.json();
            setStation(result);
            return result;
        }
        catch (err: any) {
            console.error('Ошибка при запросе:', err);
            setError(err.message);
            return null;
        }
        finally {
            setLoading(false);
        }
    };

    return {
        error,
        loading,
        station,
        searchStation
    }
}
