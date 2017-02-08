---
layout: post
title: "Melbourne Weather"
date: 2016-12-31
---

## Introduction

How does Melbourne weather really behave?

Melbourne has a reputation for fickleness, being cold one hour, hot the next, then raining without warning. I looked at the Bureau of Meterology's (BoM) data for [Melbourne's past year](https://www.bom.gov.au/climate/dwo/IDCJDW3033.latest.shtml) to see how much of that reputation I could confirm with plots and statistics.

## Temperature

![Temperatures](img/melbourne-weather/tempsLine.png)

From 1 December 2015 to 31 November 2016, each day spanned a mean of 8.4 degrees, while the most indecisive day was January the 13th, stretching 25.4 degrees from 16.8 degrees to 42.2 degrees.

Although the overall trend obeyed the law of being hotter in Summer and colder in Winter, daily minimum and maximum temperatures tended to oscillate wildly, with each day's low and high being, on average, different to the next day's by 2.2 and 3.4 degrees resectively. There were about 100 days whose high changed less than 1 degree from the previous day. Lows had a similar result.

Might changes between daily temperature ranges be more steady?

![Temperature Differences](img/melbourne-weather/tempsDiff.png)

Nope. On average, each day's temperature range was 4 degrees different to the next. Only 4 days' temperature ranges changed less than 1 degree from the previous day.

## Rain

![Rainfall](img/melbourne-weather/rainLine.png)

Daily rainfall was more consistent. Each day's rainfall was diferent to the next by an average of only 2.4 millimetres, with about 230 days showing a change of less than 1 millimetre from the previous day.

Melbourne's rain appears to come in clusters of a few days, with shorter clusters around Summer. The 30.6 millimetre spike on Christmas looks lonely, but was followed by 25.4 millimetres on Boxing Day with a bit of rain the next day and in the days before.

## Prediction

What can today's data tell us about tomorrow's rain and temperatures?

I fed about 90% of the weather data into a linear regression, which is like a many-dimensional version of drawing a line of best fit. Evaluating the model on the remaining 10% of the data, the model was off by about 2 degrees for predicting daily minimums, 3 degrees for daily maximiums and 2 millimetres for rainfall. (I think that's fairly good for a simple model with limited data.)

Along with temperature and rain amounts, the BoM's data also includes things like wind speed and direction at certain times of the day. Surprisingly, it was wind data,  not temperature data, that had the strongest influence in predicting the next day's maximum temperature:

![Predictors](img/melbourne-weather/predictors.png)

Wind data was also the strongest influence for predicting minimums and rainfall.

Unfortunately, the plot above demonstrates a mistake I made: Instead of treating wind speeds as a continuous variable, I treated them as discrete. In other words, the model has a separate dimension for every single wind speed in the data. (On the bright side, fixing that mistake might improve the model's accuracy. On the other hand, it might not.)

## Conclusions

* Expect rainy days in groups.
* Temperature changes as it pleases.

## Lessons

* Check that you're using your data the way you think you're using your data.