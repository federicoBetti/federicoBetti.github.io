---
title: "Hallucination Early Detection in Diffusion Models"
authors: "F Betti, L Baraldi, L Baraldi, N Sebe, R Cucchiara"
conference: "International Journal of Computer Vision (IJCV)"
pubDate: "Nov 12 2025"
description: "HEaD+ (Hallucination Early Detection+) identifies missing-object failures early in the diffusion process using cross-attention, textual information, and a Predicted Final Image signal, enabling early restarts with different seeds to improve completeness while reducing wasted compute."
badge: "Accepted (in press)"
tags: ["Diffusion Models", "Text-to-Image", "Hallucination Detection", "Seed Selection", "Cross-Attention", "Efficiency", "Evaluation", "Generative AI"]
---

## Abstract

Text-to-Image generation has seen significant advancements in output realism with the advent of diffusion models. However, diffusion models encounter difficulties when tasked with generating multiple objects, frequently resulting in hallucinations where certain entities are omitted. While existing solutions typically focus on optimizing latent representations within diffusion models, the relevance of the initial generation seed is typically underestimated. While using various seeds in multiple iterations can improve results, this method also significantly increases time and energy costs. To address this challenge, we introduce HEaD+ (Hallucination Early Detection +), a novel approach designed to identify incorrect generations early in the diffusion process. The HEaD+ framework integrates cross-attention maps and textual information with a novel input, the Predicted Final Image. The objective is to assess whether to proceed with the current generation or restart it with a different seed, thereby exploring multiple-generation seeds while conserving time. HEaD+ is trained on the newly created InsideGen dataset of 45,000 generated images, each containing prompts with up to seven objects. Our findings demonstrate a 6-8% increase in the likelihood of achieving a complete generation (i.e. an image accurately representing all specified subjects) with four objects when applying HEaD+ alongside existing models. Additionally, HEaD+ reduces generation times by up to 32% when aiming for a complete image, enhancing the efficiency of generating complete and accurate object representations relative to leading models.

## Key Contributions

1. HEaD+ framework for early detection of missing-object hallucinations during diffusion generation.
2. Predicted Final Image (PFI) indicator to forecast the final output at intermediate diffusion steps.
3. Hallucination Prediction network combining PFI, cross-attention maps, and text embeddings via a Transformer Decoder, designed to be model-agnostic.
4. Improved probability of complete generations for four-object prompts when used with existing diffusion models, with reduced generation time for achieving complete images.
5. Creation of the InsideGen dataset (45,000 images) with hallucination annotations and saved intermediate signals (cross-attention maps and PFIs).
