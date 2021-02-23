+++
apply_url = ""
bg_image = ""
date = 2021-03-16T17:30:00Z
description = "Data engineering"
fee = ""
image = "/images/screen-shot-2021-02-23-at-09-04-21.png"
location = ""
title = "Workflow engines for a data driven world"
[[speaker]]
designation = ""
image = ""
name = "Lennard Eijsackers"
[[speaker]]
designation = ""
image = ""
name = "Pieter van der Meer"

+++
The evolution of data engineering pipelines has given rise to a new generation of workflow orchestration products.  
Evolving from simple cron jobs scheduling recurring jobs, we have seen the birth of orchestration tools based on Directed Acyclic Graphs (DAG) like Airflow. But with the coming of data-centric organizations orchestrating static workflows on a fixed schedule is not enough anymore. How do we support data science workflows in ML pipelines where we need to pass data from one task to another? How do we cope with event driven or serverless architectures, or anything that does not fit into the logic of batch processing?

In this meetup we introduce two next generation workflow tools, that allow for the needed sophistication in our new data driven IT world.

**18:30 Talk 1: Argo**

Argo (or Argo Workflows) is a Kubernetes native workflow engine that can be used to orchestrate complex container based jobs. Argo Workflows is deployed as an Kubernetes Operator, watching Kubernetes CRDs (Custom Resource Definition) that extend the Kubernetes API with the Workflow and Task concepts. It is also the building block for other popular open source projects, such as Kubeflow and Couler.  
In this talk I will dive into Argo workflows, how it works and how you can use it.  
_Speaker: Lennard Eijsackers_

**19:00 Talk 2: Temporal.io**

In a distributed architecture with numerous microservices, business logic workflows require tracking of complex state across stateless services and responding to asynchronous events and external dependencies. Temporal is a powerful workflow solution for dealing with such asynchronous business logic.  
Temporal can be a bit overwhelming when using it for the first time, in this presentation i am going to walk you through the basics and eventually present a live demo of a Workflow.  
_Speaker: Pieter van der Meer_

We start at 18:30 and will end around 19:30.

Please subscribe to the event at [https://www.meetup.com/DataWorkz/events/276189719/](https://www.meetup.com/DataWorkz/events/276189719/ "https://www.meetup.com/DataWorkz/events/276189719/")

_Please note, that due to the group being private (there has been some unfortunate spam in the past), you have to join the Dataworkz meetup group in order to subscribe to the meetup._