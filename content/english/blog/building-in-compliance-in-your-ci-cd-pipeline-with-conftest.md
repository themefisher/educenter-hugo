+++
author = "Lennard Eijsackers"
bg_image = ""
categories = ["Data Engineering"]
date = 2019-10-05T22:00:00Z
description = ""
image = "/images/opa-horizontal-color.png"
tags = ["AWS", "CI/CD", "cloud", "Open Policy Agent"]
title = "Building in compliance in your CI/CD pipeline with conftest"
type = "post"

+++
In the previous post I introduced the Open Policy Agent as a method to validate configuration changes against policies to maintain compliance in your environment. In this post I will show how you can utilise the Open Policy Agent with conftest to build in compliance checks in your CI/CD (Continuous Integration/Continuous Delivery) pipeline and how conftest can be used to centrally manage the Rego policies.

In order to ensure all teams can build in compliance in their development life cycle, we need to ensure every change is validated. In other words: we need to incorporate it as part of the continues integration process. There are several requirements that need to be met before we can achieve this:

[Read more...](https://www.blokje5.dev/posts/compliance-in-cicd/)