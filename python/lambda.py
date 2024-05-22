people = [
    {"name":"H", "house":"H's house"},
    {"name":"C", "house":"A's house"},
    {"name":"B", "house":"B's house"},
]

def f(person):
    return person["name"]

people.sort(key=f)

print(people)