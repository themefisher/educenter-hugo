+++
author = "Lennard Eijsackers"
bg_image = ""
categories = []
date = 2020-02-22T23:00:00Z
description = ""
image = "/images/images.jpg"
tags = ["Kubernetes", "cloud", "Open Policy Agent"]
title = "Extending conftest with plugins"
type = "post"

+++
Conftest plugins allow users to extend the conftest CLI without needing to add to the codebase. This means anybody can add new features to conftest. For example, you could easily build a kubectl plugin that passes information from a live kubernetes cluster into conftest. This allows conftest to test Rego policies against live applications! This can be a good first step for achieving compliance in a continuos manner. First existing applications can be audited, and the teams maintaining that application can be notified before new compliance rules will be enabled. This gives teams the opportunities to prepare instead of forcing them to change their application as soon as new rules are enabled.

[Read more...]()