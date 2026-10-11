/**
 * Mustafa Ali Hakeemi — Personal Portfolio JavaScript
 * Features:
 *  - Custom Photo Upload with instant preview & localStorage persistence
 *  - Drag & Drop photo replacement
 *  - Responsive mobile drawer menu
 *  - One-click APA publication citation copy
 *  - Active section scroll spy
 *  - Interactive contact mailto handler
 */

document.addEventListener('DOMContentLoaded', () => {

  /* Clear any legacy test cache so image strictly follows the path in index.html */
  try {
    localStorage.removeItem('mustafa_portfolio_custom_avatar');
    localStorage.removeItem('mustafa_portfolio_custom_avatar_v2');
  } catch (e) {}

  /* ==========================================================================
     1. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer when any mobile link is clicked
    const mobLinks = mobileDrawer.querySelectorAll('a');
    mobLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ==========================================================================
     3. CITATION COPY TO CLIPBOARD
     ========================================================================== */
  const copyCitationBtn = document.getElementById('copyCitationBtn');
  const copyCitationLabel = document.getElementById('copyCitationLabel');

  const APA_CITATION = `Ali, S., Nazeer, M. N., Rehman, S., Hakeemi, M. A., Naqvi, S. A. R., Ullah, S., & Ahmad, M. J. (2026). An IoT-Based Face Recognition Smart Door Access Control System with Real-Time Security Analysis and Performance Optimization. Spectrum of Engineering Sciences.`;

  if (copyCitationBtn && copyCitationLabel) {
    copyCitationBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(APA_CITATION);
        copyCitationLabel.textContent = '✓ Citation Copied!';
        copyCitationBtn.style.borderColor = '#10b981';
        copyCitationBtn.style.color = '#065f46';
        setTimeout(() => {
          copyCitationLabel.textContent = 'Copy APA Citation';
          copyCitationBtn.style.borderColor = '';
          copyCitationBtn.style.color = '';
        }, 2800);
      } catch (err) {
        // Fallback prompt
        window.prompt('Copy citation to clipboard:', APA_CITATION);
      }
    });
  }

  /* ==========================================================================
     4. CONTACT FORM TO MAILTO HANDLER
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formSuccessToast = document.getElementById('formSuccessToast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const subject = document.getElementById('userSubject').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      const recipient = 'mustafahakeemi799@gmail.com';
      const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n-- Sent via Mustafa Ali Hakeemi Portfolio`);

      if (formSuccessToast) {
        formSuccessToast.classList.remove('hidden');
      }

      setTimeout(() => {
        window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
      }, 700);
    });
  }

  /* ==========================================================================
     5. GENERIC TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message) {
    let toast = document.getElementById('globalFloatingToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalFloatingToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #111827;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 9999px;
        font-size: 13.5px;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        z-index: 9999;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateY(30px);
        opacity: 0;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateY(30px)';
      toast.style.opacity = '0';
    }, 2800);
  }

  /* ==========================================================================
     6. ACTIVE SECTION HIGHLIGHT ON SCROLL
     ========================================================================== */
  const navLinks = document.querySelectorAll('.desktopNav a, .nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

});
