```javascript
// Solution using inline CSS to bypass the Tailwind restriction
<div>
  <style>
    .custom-gradient {
      background-image: linear-gradient(45deg, red, blue);
      height: 100vh;
      width: 100vw;
    }
  </style>
  <div class="custom-gradient">
    {/* Content here */}
  </div>
</div>
```