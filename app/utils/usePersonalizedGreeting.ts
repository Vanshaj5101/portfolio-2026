import { useState, useEffect } from 'react';

interface LocationData {
  city?: string;
  country?: string;
  timezone?: string;
}

interface GreetingParts {
  text: string;
  city: string | null;
  punctuation: string;
}

export const usePersonalizedGreeting = () => {
  const [greeting, setGreeting] = useState('Hello Visitor!!!');
  const [greetingParts, setGreetingParts] = useState<GreetingParts>({
    text: 'Hello',
    city: null,
    punctuation: ', Visitor!'
  });
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const morningGreetings = ['Good morning', 'morning', 'Rise and shine'];
    const afternoonGreetings = ['Good afternoon', 'Happy afternoon', 'Afternoon'];
    const eveningGreetings = ['Good evening', 'Evening', 'Evening greetings'];
    const nightGreetings = ['Working late', 'Late night greetings', 'Still up'];

    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const getTimeBasedGreeting = (): string => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) return random(morningGreetings);
      if (hour >= 12 && hour < 17) return random(afternoonGreetings);
      if (hour >= 17 && hour < 22) return random(eveningGreetings);
      return random(nightGreetings);
    };

    const fetchLocation = async () => {
      try {
        // Try to get location from IP (using ipapi.co - free, no API key needed)
        const response = await fetch('https://ipapi.co/json/');

        if (response.ok) {
          const data = await response.json();

          const locationData: LocationData = {
            city: data.city,
            country: data.country_name,
            timezone: data.timezone
          };

          setLocation(locationData);

          // Create personalized greeting
          const timeGreeting = getTimeBasedGreeting();
          let personalizedGreeting = timeGreeting;

          if (data.city) {
            personalizedGreeting = `${timeGreeting}, ${data.city}!`;
            setGreetingParts({
              text: `${timeGreeting}, `,
              city: data.city,
              punctuation: '!'
            });
          } else {
            personalizedGreeting = `${timeGreeting}, Visitor!`;
            setGreetingParts({
              text: timeGreeting,
              city: null,
              punctuation: ', Visitor!'
            });
          }

          setGreeting(personalizedGreeting);
        } else {
          // Fallback to time-based greeting only
          const timeGreeting = getTimeBasedGreeting();
          setGreeting(`${timeGreeting}, Visitor!`);
          setGreetingParts({
            text: timeGreeting,
            city: null,
            punctuation: ', Visitor!'
          });
        }
      } catch (error) {
        // If location fetch fails, use time-based greeting
        console.log('Location detection unavailable, using time-based greeting');
        const timeGreeting = getTimeBasedGreeting();
        setGreeting(`${timeGreeting}, Visitor!`);
        setGreetingParts({
          text: timeGreeting,
          city: null,
          punctuation: ', Visitor!'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { greeting, greetingParts, location, isLoading };
};
