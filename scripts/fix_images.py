import os
import shutil

base_dir = "/Users/dp/untrainedmodel/public/images/blog"

# Mapping: Target Filename (in blog-posts.ts) <- Source Filename (generated)
mapping = {
    "ai-web-dev.svg": "rag-pipeline.svg",
    "ml-beginners.svg": "tokenization.svg",
    "react-performance.svg": "frameworks.svg",
    "platform-eng.svg": "ai-future.svg",
    "system-design.svg": "multi-agent.svg",
    "typescript.svg": "gen-ui.svg", # Copying gen-ui for basic use
    "prompt-eng.svg": "prompt-eng.svg",
    "ai-education.svg": "ai-education.svg",
    "ai-battle.svg": "ai-battle.svg",
    "algo-trading.svg": "algo-trading.svg",
    "ai-ethics.svg": "ai-ethics.svg",
    "autogen.svg": "autogen.svg",
    "gen-ui.svg": "gen-ui.svg",
    "ai-health.svg": "ai-health.svg",
    "seo-ai.svg": "seo-ai.svg",
    "css-wars.svg": "css-wars.svg"
}

for target, source in mapping.items():
    src_path = os.path.join(base_dir, source)
    dst_path = os.path.join(base_dir, target)
    
    if os.path.exists(src_path):
        if src_path != dst_path:
            shutil.copy2(src_path, dst_path)
            print(f"Copied {source} to {target}")
    else:
        print(f"Warning: Source {source} not found!")

print("Image fix complete.")
