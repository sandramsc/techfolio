# Designed & coded by Sandra Ashipala <https://github.com/sandramsc>
import folium
import pandas as pd
import geopandas as gpd


usgs_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv"
data = pd.read_csv(usgs_url)
# create a map, change the basemap style
m = folium.Map(location=[10.850516, 76.271080],
               tiles='cartodb dark_matter', zoom_start=3, max_bounds=True, min_zoom=2, max_zoom=8)


tiles = 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FqdXN0c21pbGUiLCJhIjoiY2tzMDJ0MGM5MHg2ODJwbXNmY3ZhZmZ5YNo5yjRLqilegQCm7W0JzwaCJ9.',
attr = 'Mapbox attribution'


# create markers
for i in range(len(data)):
    folium.Circle(
        location=[data.iloc[i]['latitude'], data.iloc[i]['longitude']],
        popup=folium.Popup("<b>Earthquake Magnitude</b>"),
        # multiples mag by 62000 which results in the earthquakes radius in m/km
        radius=data.iloc[i]['mag'] * 62000,
        fill_opacity=0.1,
        weight=1,
        color='red',
        opacity=0.4,
        fill_color='yellow',
        smooth_factor=1.0,
    ).add_to(m)

# generate map
m.save('map.html')
