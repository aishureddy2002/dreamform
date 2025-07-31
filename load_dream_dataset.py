import pandas as pd

# Load the CSV file
df = pd.read_csv('dream_dataset.csv')

# Show the first few rows
print(df.head())

# Optionally, show summary info
print("\nDataset info:")
print(df.info())
