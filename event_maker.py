import json

name = [
    "Study Group", 
    "Peer Tutoring", 
    "Mentor Tutoring", 
    "Hangout", 
    "Midterm Study Session",
    "Mentor Tutoring"
]

times = [
    ("2:00 PM - 4:00 PM"),
    ("3:00 PM - 5:00 PM"),
    ("1:00 PM - 3:00 PM"),
    ("6:00 PM - 8:00 PM"),
    ("10:00 AM - 12:00 PM"),
    ("3:00 PM - 5:00 PM")
]

dates = [
    "Feb 17",  
    "Feb 18",  
    "Feb 19",  
    "Feb 20",  
    "Feb 21",
    "Feb 25"
]

locations = [
    "Davis", 
    "UL", 
    "Coffee Shop", 
    "Gaming Arena",
    "Union",
    "PH 201"
]

descriptions = [
    "Math study group, working on differential equations",
    "Tutoring for COMP110 with TA Bob",
    "Mentor tutoring for Physics exam prep",
    "Casual hangout, board games and chat",
    "Comp110 midterm preparation",
    "Algorithms tutoring with Prof Bob"
]

events= (name, times, dates, locations, descriptions)

with open("events.json" , "w") as file:
    json.dump(events, file)