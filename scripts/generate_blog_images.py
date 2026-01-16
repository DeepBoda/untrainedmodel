import os
import random

# Ensure directory exists
output_dir = "/Users/dp/untrainedmodel/public/images/blog"
os.makedirs(output_dir, exist_ok=True)

# List of required filenames based on blog-posts.ts
filenames = [
    "prompt-eng.svg",
    "ai-future.svg",
    "rag-pipeline.svg",
    "frameworks.svg",
    "tokenization.svg",
    "multi-agent.svg",
    "gen-ui.svg",
    "ai-health.svg",
    "seo-ai.svg",
    "css-wars.svg",
    "ai-education.svg",
    "ai-battle.svg",
    "algo-trading.svg",
    "ai-ethics.svg",
    "autogen.svg"
]

def generate_svg(filename, hue_shift):
    # Create a unique-ish abstract pattern
    color1 = f"hsl({hue_shift}, 70%, 60%)"
    color2 = f"hsl({(hue_shift + 40) % 360}, 70%, 60%)"
    
    svg_content = f"""<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{color2};stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="400" fill="#050505"/>
  <rect width="800" height="400" fill="url(#grad)" opacity="0.1"/>
  
  <!-- Abstract Shapes -->
  <circle cx="{random.randint(100, 700)}" cy="{random.randint(50, 350)}" r="{random.randint(50, 150)}" fill="url(#grad)" opacity="0.2" filter="url(#glow)"/>
  <path d="M{random.randint(0, 400)} {random.randint(200, 400)} Q {random.randint(200, 600)} {random.randint(0, 200)} {random.randint(400, 800)} {random.randint(200, 400)}" stroke="url(#grad)" stroke-width="4" fill="none" opacity="0.5"/>
  
  <!-- Content Placeholder Grid -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" opacity="0.05"/>
  </pattern>
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="white" opacity="0.8" letter-spacing="4">UNTRAINED MODEL</text>
</svg>"""
    
    with open(os.path.join(output_dir, filename), "w") as f:
        f.write(svg_content)
    print(f"Generated {filename}")

# Generate all SVGs
for i, name in enumerate(filenames):
    hue = (i * 137.5) % 360  # Golden angle approximation for good color distribution
    generate_svg(name, hue)

print("All SVGs generated successfully.")
