import os
from PIL import Image, ImageDraw

def remove_background(image_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        # Smart Black Background Removal
        # We want to keep the anti-aliased edges but remove the deep black.
        brightness = (r + g + b) / 3
        
        # Thresholds
        # < 10: Pure background -> Transparent
        # > 30: Logo content -> Opaque
        # 10-30: Anti-aliased edge -> Semi-transparent
        
        if brightness < 10:
            alpha = 0
        elif brightness > 30:
            alpha = 255
        else:
            # Smooth transition for edges
            alpha = int(((brightness - 10) / 20) * 255)
            
        new_data.append((r, g, b, alpha))
    
    img.putdata(new_data)
    return img

def create_og_image(logo_img):
    # Create 1200x630 background - Dark elegant #030014
    og = Image.new('RGB', (1200, 630), (3, 0, 20)) 
    draw = ImageDraw.Draw(og)
    
    # Draw glowing orbs (simulated gradients)
    # Orb 1: Purple
    draw.ellipse((-100, -100, 400, 400), fill=(79, 70, 229), outline=None)
    # Orb 2: Cyan
    draw.ellipse((800, 300, 1300, 800), fill=(6, 182, 212), outline=None)
    
    # Blur is hard in pure PIL without heavy processing, so we'll use a semi-transparent overlay to "fade" them
    overlay = Image.new('RGBA', (1200, 630), (3, 0, 20, 200))
    og.paste(overlay, (0, 0), overlay)

    # Resize logo to fit nicely
    logo_h = 250
    aspect = logo_img.width / logo_img.height
    logo_w = int(logo_h * aspect)
    logo_resized = logo_img.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    # Center position for logo
    x = (1200 - logo_w) // 2
    y = (630 - logo_h) // 2 - 50 # Move up slightly
    
    # Paste logo
    og.paste(logo_resized, (x, y), logo_resized)
    
    # Add Text (Simulated since we might not have fonts)
    # Since we can't easily draw nice text without a .ttf file, 
    # we will just rely on the logo being the centerpiece.
    # But wait, I can try to load a system font or just leave it as a logo showcase.
    # The user asked for a slogan. 
    # Let's try to find a font.
    try:
        from PIL import ImageFont
        # Try a common linux/mac font
        font_path = "/System/Library/Fonts/HelveticaNeue.ttc"
        if not os.path.exists(font_path):
             font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        
        font_title = ImageFont.truetype(font_path, 80, index=0)
        font_slogan = ImageFont.truetype(font_path, 40, index=0)
        
        # Draw Title "UntrainedModel"
        text = "UntrainedModel"
        bbox = draw.textbbox((0, 0), text, font=font_title)
        text_w = bbox[2] - bbox[0]
        draw.text(((1200 - text_w) / 2, y + logo_h + 20), text, font=font_title, fill=(255, 255, 255))
        
        # Draw Slogan
        slogan = "Raw Potential. Infinite Intelligence."
        bbox_s = draw.textbbox((0, 0), slogan, font=font_slogan)
        slogan_w = bbox_s[2] - bbox_s[0]
        draw.text(((1200 - slogan_w) / 2, y + logo_h + 120), slogan, font=font_slogan, fill=(148, 163, 184))
        
    except Exception as e:
        print(f"Could not add text: {e}")

    return og

def create_logo_text(logo_img):
    # Create a horizontal logo with text
    # Canvas size: Logo width + Text width + padding
    # Let's assume logo is 100px high
    h = 100
    aspect = logo_img.width / logo_img.height
    w = int(h * aspect)
    logo_resized = logo_img.resize((w, h), Image.Resampling.LANCZOS)
    
    # Estimate text size
    # We'll use a wide canvas and crop later if needed, or just fixed size
    # Let's make it 600x150
    canvas = Image.new('RGBA', (600, 150), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    
    # Paste logo
    canvas.paste(logo_resized, (0, 25), logo_resized)
    
    try:
        from PIL import ImageFont
        font_path = "/System/Library/Fonts/HelveticaNeue.ttc"
        if not os.path.exists(font_path):
             font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        
        font = ImageFont.truetype(font_path, 60, index=0)
        
        # Draw Text
        text = "UntrainedModel"
        draw.text((w + 20, 40), text, font=font, fill=(255, 255, 255))
        
    except Exception as e:
        print(f"Could not add text: {e}")
        
    return canvas

def main():
    source_path = "/Users/dp/.gemini/antigravity/brain/9b7cccf1-e688-4e95-8214-0f589a852d1b/untrainedmodel_vibrant_u_logo_1764244625886.png"
    
    print("Processing logo...")
    transparent_logo = remove_background(source_path)
    
    print("Saving logo.png...")
    transparent_logo.save("public/logo.png", "PNG")
    
    print("Generating logo-text.png...")
    logo_text = create_logo_text(transparent_logo)
    logo_text.save("public/logo-text.png", "PNG")
    
    print("Generating icons...")
    transparent_logo.resize((32, 32), Image.Resampling.LANCZOS).save("public/favicon.ico", format="ICO")
    transparent_logo.resize((180, 180), Image.Resampling.LANCZOS).save("public/apple-touch-icon.png", "PNG")
    transparent_logo.resize((192, 192), Image.Resampling.LANCZOS).save("public/android-chrome-192x192.png", "PNG")
    transparent_logo.resize((512, 512), Image.Resampling.LANCZOS).save("public/icon.png", "PNG")
    
    print("Generating OG Image...")
    og_img = create_og_image(transparent_logo)
    og_img.save("public/og-image.png", "PNG")
    
    print("Done!")

if __name__ == "__main__":
    main()
