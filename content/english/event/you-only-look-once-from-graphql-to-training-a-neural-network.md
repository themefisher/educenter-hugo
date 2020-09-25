+++
apply_url = "https://www.meetup.com/DataWorkz/events/263829815/"
bg_image = ""
date = 2019-09-19T16:00:00Z
description = ""
fee = "free"
image = "/images/screen-shot-2020-09-25-at-17-11-25.png"
location = "Dataworkz offices"
title = "You Only Look Once: from GraphQL to training a neural network"
[[speaker]]
designation = ""
image = ""
name = "Bogdan Ivtsjenko"
[[speaker]]
designation = ""
image = ""
name = "Joep Kokkeler"

+++
Want to learn more about GraphQL and the benefits it can bring to your project? Or get to know how deep learning can be used to not get parking tickets? Then this meetup is for you!

Program:

18:00 food

18:30 talk 1

19:30 short break

19:45 talk 2

20:45 drinks

Talk 1:

Speaker: Joep Kokkeler

Retrieving you're data with GraphQL

In this talk Joep will take you down the rabbit hole that is Graphql and show you how Graphql could easily help you get the data you need.

He will show how you can use Graphql to get specific information about your data like only getting a rating or a id from the same endpoint you will normally use to get all you're data from.

This talk will show some basics graphql, multiple services working together and some pointers and theory on how to get started and how to setup your own graphql service.

During the talk you will see:

\- the building blocks of graphql: Queries, Mutations and Subscriptions

\- small service setup, demo how to interact with your first graphql service

\- code demo to get the highest rated movie and mutate your movie so it will become the highest rated movie

\- how to use multiple graphql endpoints in a lambda setup using a federated setup

Talk 2:

Speaker: Bogdan Ivtsjenko

From Neural Networks to never forgetting to pay for parking you're car.

Bogdan will tell you a story about how he plans to never forget to pay for parking his car. It all started when he received 5 parking tickets in one day. Nowadays the process of ticketing is fully automated by so-called scan cars. These cars scan vehicles on their license plates and check wether someone paid for a particular hour. As technicians we are surrounded by all cool machine learning technology and this unpleasant event made us think:

Why not detect the scan cars with image recognition. The model can warn you to turn on your parking app when it detects a scan car driving by. We answer this question with an application that’s capable of just doing that.

The application is build around YOLO (You Only Look Once) deep learning framework. YOLO is a state-of-the-art, real-time object detection system. Prior detection systems repurpose classifiers or localizers to perform detection. They apply the model to an image at multiple locations and scales. High scoring regions of the image are considered detections.

We use a totally different approach. We apply a single neural network to the full image. This network divides the image into regions and predicts bounding boxes and probabilities for each region. These bounding boxes are weighted by the predicted probabilities. It looks at the whole image at test time so its predictions are informed by global context in the image. It also makes predictions with a single network evaluation unlike systems like R-CNN which require thousands for a single image. This makes it extremely fast, more than 1000x faster than R-CNN and 100x faster than Fast R-CNN.

During the talk we’ll tell our audience more about:

— Training of the model

— The development of the application.

— The difficulties and challenges in this project.

— Next steps to take.