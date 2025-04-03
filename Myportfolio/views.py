from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages  # For alert messages

def contact_form(request):
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        phone = request.POST.get("phone", "").strip()
        address = request.POST.get("address", "").strip()
        description = request.POST.get("description", "").strip()

        # Validate required fields
        if not all([name, email, phone, address, description]):
            messages.error(request, "All fields are required!")
            return redirect("contact_form")  # Reload the page with an error message

        # Send email
        subject = f"New Contact Form Submission from {name}"
        message = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nAddress: {address}\n\nDescription:\n{description}"
        try:
            send_mail(subject, message, email, ["sivaprasadkandena@gmail.com"])  # Replace with your email
            messages.success(request, "Your message has been sent successfully!")
            return redirect("contact_form")  # Reload with a success message
        except Exception as e:
            messages.error(request, "Email sending failed! Please try again.")
            return redirect("contact_form")  

    return render(request, "index.html")

