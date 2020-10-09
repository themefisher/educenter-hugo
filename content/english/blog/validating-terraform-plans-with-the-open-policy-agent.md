+++
author = "Lennard Eijsackers"
bg_image = ""
categories = []
date = 2019-06-19T22:00:00Z
description = ""
image = "/images/banner.png"
tags = ["Terraform", "IaaC", "cloud", "Open Policy Agent"]
title = "Validating Terraform plans with the Open Policy Agent"
type = "post"

+++
Teams in a DevOps organisation should be free to setup and manage the infrastructure for their services. Terraform is a great way to allow teams to declaratively define their infrastructure needs. However, from a compliance and security perspective, you want to place certain guardrails in place. One such guardrail is of course restricting the set of permissions the teams are given. This stops teams from deploying infrastructure your organisation does not have a need for (Most likely your teams do not need to setup satellite connections from the cloud) and prevents them from editing resources not managed by them. But it does not cover all rules and regulations that you want to enforce. You also want to ensure that teams do not create public databases, or that the naming convention of your organisation is followed.

[Read more...](https://www.blokje5.dev/posts/validating-terraform-plans/)