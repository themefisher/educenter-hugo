+++
author = "Steven Vroonland"
bg_image = ""
categories = [""]
date = 2020-10-11T22:00:00Z
description = "Networks are unreliable and peak loads are one of the major causes of failures. All this while your users expect your system to continue operating and be responsive. What can we do to make inter-service calls less prone to failures or peak loads and our systems more resilient?"
image = "/images/streams.png"
tags = ["Kafka", "microservices", "streaming"]
title = "Patterns for making your inter-service communication more resilient"
type = "post"

+++
In a streaming data processing system, we frequently have to deal with:

* a varying load of incoming events
* calls to external APIs over the network to process those events

The same situation applies to microservice architectures, where services make use of each other via remote calls and deal with varying loads. This interaction makes the stability of one system/microservice depend a lot on the availability and load of other systems/microservices.

[Read more...](https://medium.com/@svroonland/patterns-for-making-your-inter-service-communication-more-resilient-592ec928296b)