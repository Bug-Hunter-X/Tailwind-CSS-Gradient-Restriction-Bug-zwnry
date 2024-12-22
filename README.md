# Tailwind CSS Gradient Restriction

This repository demonstrates a bug in Tailwind CSS where the `bg-gradient-to-*` directive does not support arbitrary angle values.  This limitation can lead to unexpected behavior or rendering issues.

## Bug Description

Tailwind CSS only accepts a limited set of predefined values for the direction of linear gradients. Attempts to use custom angles or directions outside this predefined set will result in the gradient not being applied correctly or even failing to render.

## Steps to Reproduce

1. Use a custom angle or direction with `bg-gradient-to-*` that is not in the predefined list of Tailwind directives.
2. Observe the unexpected behavior or rendering issues in the browser.

## Solution

The provided solution file illustrates a workaround using CSS directly in a `<style>` tag to define the gradient with arbitrary angle. This bypasses the Tailwind restriction.  A more robust approach would be to create a custom Tailwind plugin to handle custom gradient directions more efficiently.