---
layout: post
title: "Blog Popularity"
date: 2016-11-26
---

## Introduction

What makes an IT blog popular?

In 2015, Security Innovation Europe (SIE) published their list of [40 Blogs Every Software Developer Should Be Reading](https://www.securityinnovationeurope.com/blog/40-blogs-every-software-developer-should-be-reading). Each blog on the list was looked up on [Alexa](https://alexa.com), which estimates global website popularity.

![Global Rankings](img/blog-popularity/global.png)

At the time of writing, the most popular blog on the list is David Walsh's blog with a global Alexa ranking of 8382, while Ruminations of a Programmer trails the field as the world's 12,806,533rd most popular website.

Although the factors that determine a site's popularity are likely complex, this investigation focused on simple characteristics of the HTML of each blog's home page, begining with its size:

![Popularity vs Home Page File Size](img/blog-popularity/filesize.png)

A home page larger than 150kB is an ill omen.

## Tags

Next, the usage of various kinds of HTML tag as a proportion of the home page's total HTML was considered ((amount of tags) / (file size in bytes)). Each of the following plots is accompanied by a Spearman correlation coefficient; a value closer to -1 indicates higher correlation between greater tag usage and popularity, a value closer to 1 indicates higher correlation between greater tag uasage and lower popularity.

![Popularity vs img Tag Usage](img/blog-popularity/tags-img.png)

It doesn't hurt to have lots of images.

![Popularity vs code Tag Usage](img/blog-popularity/tags-code.png)

Amusingly, the more popular blogs tend not to use `<code>` tags as often as the less popular blogs.

For tags which are used in small quantities, their absolute usage is more revealing than their proportional usage.

![Popularity vs style Tag Usage](img/blog-popularity/tags-style.png)

Despite prevailing wisdom suggesting `<style>` tags should be eschewed in favour of stylesheets, there are blogs on SIE's list which use multiple `<style>` tags. Their disregard for common sense tends not to be rewarded.

## Words

Finally, each page was broken into words by folding case and stripping punctuation. For each word, the amount of blogs it appeared in was plotted against the relative popularity of those blogs.

![Popularity Based On Word Presence](img/blog-popularity/words-all.png)

For any word which appear in all 40 blogs, the mean of the relative popularity of the blogs it appears in is 20.5. The less common a word is, the more strongly it indicates blog popularity. Focusing on words which only appear in the top ten blogs:

![Popularity Based On Words](img/blog-popularity/words-top.png)

We can see that a word like "deploy" which appears in five blogs on SIE's list is a good indicator of popularity.

## Conclusion

To give your IT blog a slight edge over the competition:

* Limit page size.
* Use stylesheets and plenty of images.
* Talk about your "incredible students".