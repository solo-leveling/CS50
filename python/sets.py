# Creating a empty set
s = set()

# Adding elements
s.add(1)
s.add(2)
s.add(3)
s.add(4) 

# Adding same element won't work in set
s.add(3)

# Removing a element
s.remove(2)

# This is how to measure length
print(f"Length of set is {len(s)}")

print(s)
