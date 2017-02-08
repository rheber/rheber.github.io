---
layout: post
title: "Best Picture"
date: 2017-02-07
---

## Introduction

Which film will win the 2016 Oscar for Best Film?

To try to predict this, I'll use the embarrassingly simple Naive Bayes strategy. The probability that the next winner will have some property is estimated by the proportion of past winners that satisfy that property. (For example, 10 of the past 88 winners were classified "PG-13", so the probability that another winner will too is 10/88.)

## The Data

Having run the list of past winners through [The Open Movie Database](https://www.omdbapi.com) (OMDB), I decided to focus on five features: runtime, IMDB Score, genre, classification (according to the US's MPAA system) and country of origin. First, I took a look at the numerical data.

![Runtimes](img/best-picture/runtime.png)

The histogram above shows that past winners have mostly run between 100 and 150 minutes long.

![IMDB Scores](img/best-picture/imdb.png)

Oddly enough, past winners tend to be rated between 7.5 and 8.5 by IMDB; the only films ranked at least a 9 are the first two Godfather films.

Next, the nominal data. The classification data is a bit odd since the system has endured several changes over the years, and it's no surprise that the US has dominated in previous years, so the most interesting feature should be genre.

![Genres](img/best-picture/genre.png)

Shocking.

The most infuriating aspect of the bar plot above is that my laziness has skewed the plot **against** dramas. In cases where OMDB provides more than one genre, I've only kept the first one, and since the list is sorted alphabetically, any film which is, for example, both a biography and a drama, is only counted as a biography. In other words, there are **more** winners in the drama category than the plot admits, yet it still dominates the other categories!

## Envelope, Please

For each 2016 nominee, I once again retrieved its genre, runtime and so on from OMDB. For each film, I multiplied the probabilities associated with each of its features, then normalised each film's result (divided each result by the sum of results, beacuse probabilities must add up to 1), and arrived at this suspiscious-looking table:

|Film|Probability of Winning|
-|-
|Arrival|0.26|
|Fences|0.17|
|Hacksaw Ridge|0|
|Hell or High Water|0.08|
|Hidden Figures|0.15|
|La La Land|0.01|
|Lion|0|
|Manchester by the Sea|0.13|
|Moonlight|0.21|

You may notice a couple of zeroes here. That's because in the simple Naive Bayes formulation, somethig which has never happened before has no chance of happening in the future. In this case, the award has never been won by an Australian film. The model doesn't give La La Land much of a chance either; it's main crime was to be labelled a comedy by OMDB.

As for Arrival and Moonlight, both are American dramas in the 100-150 minute range, but Arrival has an IMDB score of 8.3, while Moonlight scores 8.7. Moonlight is too good to win!

## Conclusion

My model says Arrival will win, but I wouldn't bet on it.
