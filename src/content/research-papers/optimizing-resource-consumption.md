---
title: "Optimizing Resource Consumption in Diffusion Models through Hallucination Early Detection"
authors: "F Betti, L Baraldi, R Cucchiara, N Sebe"
conference: "Proceedings of the European Conference on Computer Vision Workshops. 2024."
pubDate: "Jan 15 2024"
description: "We introduce HEaD (Hallucination Early Detection), a novel paradigm that swiftly detects incorrect generations in diffusion models during early stages, saving computational resources and accelerating the generation process for complex multi-object images."
link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ms5ctkUAAAAJ&citation_for_view=Ms5ctkUAAAAJ:eQOLeE2rZwMC"
tags: ["Computer Vision", "Diffusion Models", "Resource Optimization", "Computational Efficiency", "Hallucination Detection", "Multi-object Generation", "Cross-attention Maps", "Energy Consumption"]
---

## Abstract

We introduce HEaD (Hallucination Early Detection), a novel paradigm designed to swiftly detect incorrect generations at the beginning of the diffusion process. Diffusion models struggle when generating complex combinations of multiple objects, often requiring multiple iterations with different seeds, wasting time and increasing energy consumption. Our HEaD pipeline combines cross-attention maps with a new indicator, the Predicted Final Image, to forecast the final outcome using information available in early generation stages. Results show HEaD can save up to 12% of generation time in two-object scenarios, highlighting the importance of early detection mechanisms in improving efficiency for complex generative tasks.

## Key Contributions

1. Novel HEaD paradigm for early hallucination detection in diffusion models
2. Combination of cross-attention maps with Predicted Final Image indicator
3. Quantitative analysis showing up to 12% time savings for multi-object generation
4. Framework for improving efficiency and reducing energy consumption in complex generative tasks 