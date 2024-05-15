def announce(f):
    def warpper():
        print("About to run a function...")
        f()
        print("Function running successfully...")
    return warpper

@announce
def hello():
    print("Hello")

hello()