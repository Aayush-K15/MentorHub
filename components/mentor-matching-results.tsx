"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MentorMatch {
  name: string;
  expertise: string[];
  matchReason: string;
}

export function MentorMatchingResults() {
  const [matchedMentors, setMatchedMentors] = useState<MentorMatch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const findMentors = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Collect user data from localStorage with more robust checking
      const userData = {
        firstName: localStorage.getItem('firstName') || '',
        lastName: localStorage.getItem('lastName') || '',
        email: localStorage.getItem('email') || '',
        phone: localStorage.getItem('phone') || '',
        interests: localStorage.getItem('interests') || ''
      };

      // Validate user data client-side
      if (!userData.firstName || !userData.lastName || !userData.email) {
        throw new Error('Please complete all required fields in your profile before finding a mentor');
      }

      const response = await fetch('/api/match-mentors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      // Parse the response
      const data = await response.json();

      // Check for error in the response
      if (data.error) {
        throw new Error(data.error);
      }

      // Set matched mentors
      if (data.matchedMentors && Array.isArray(data.matchedMentors)) {
        setMatchedMentors(data.matchedMentors);
        
        // If no mentors found
        if (data.matchedMentors.length === 0) {
          setError('No matching mentors found. Please update your profile with more details.');
        }
      } else {
        throw new Error('Invalid mentor matching response');
      }
    } catch (error) {
      console.error("Error finding mentors:", error);
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Button 
          onClick={findMentors} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Finding Your Ideal Mentor..." : "Find Your Perfect Mentor Match"}
        </Button>
      </div>

      {error && (
        <div className="text-red-500 text-center bg-red-50 p-3 rounded">
          {error}
        </div>
      )}

      {matchedMentors.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">Recommended Mentors</h3>
          {matchedMentors.map((mentor, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{mentor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  <span className="font-semibold">Expertise:</span> {mentor.expertise.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Why a Great Match:</span> {mentor.matchReason}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}