def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

def main():
    print("Temperature Converter")
    print("1. Convert Celsius to Fahrenheit")
    print("2. Convert Fahrenheit to Celsius")

    choice = int(input("Enter your choice (1 or 2): "))

    if choice == 1:
        celsius = float(input("Enter temperature in Celsius: "))
        fahrenheit = celsius_to_fahrenheit(celsius)
        print(f"{celsius} degrees Celsius is equal to {fahrenheit:.2f} degrees Fahrenheit.")

    elif choice == 2:
        fahrenheit = float(input("Enter temperature in Fahrenheit: "))
        celsius = fahrenheit_to_celsius(fahrenheit)
        print(f"{fahrenheit} degrees Fahrenheit is equal to {celsius:.2f} degrees Celsius.")

    else:
        print("Invalid choice. Please enter either 1 or 2.")

if __name__ == "__main__":
    main()
