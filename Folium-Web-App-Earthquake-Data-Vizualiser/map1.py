# Designed & coded by Sandra Ashipala <https://github.com/sandramsc> 
import folium
import pandas as pd


# this feed tracks every earthquake of magnitude 2.5 or greater over the last month
usgs_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
#df = pd.read_csv(usgs_url, error_bad_lines=False)
df = pandas.read_csv(usgs_url, sep='delimiter', header=None)
# create a new map object
map = folium.Map(location=(13.1939, -59.5432),
                 zoom_start=10, tiles="Stamen Terrain")

# go through each quake in set, make circle, and add to map.
for i in range(len(df)):
    if df.iloc[i]['mag'] > 3:
        folium.Circle(
            location=[df.iloc[i]['latitude'], df.iloc[i]['longitude']],
            # radius is in meters/ multiplies magnitude by 500
            radius=df.iloc[i]['mag'] * 20000,
            # boarder thickness
            weight=1,
            # boarder color
            color='pink',
            # boarder transparency
            opacity=0.3,
            # fills circle with color
            fill=True,
            # color inside circle
            fill_color='pink',
            # controls opacity
            fill_opacity=0.1,
        ).add_to(map)


# save map to interactive html file
m.save('Map1.html')
