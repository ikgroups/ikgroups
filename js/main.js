/**
 * IK Groups — Phase 0: Coming Soon
 * ----------------------------------
 * Minimal JavaScript. No frameworks.
 *
 * CONFIGURATION
 * =============
 * When contact details are confirmed, update the CONTACT
 * object below. The CTA button will automatically link
 * to the correct destination.
 *
 * Examples:
 *   { type: 'mailto',   value: 'info@ikgroups.net' }
 *   { type: 'tel',      value: '+911234567890' }
 *   { type: 'whatsapp', value: '+911234567890' }
 *   { type: 'url',      value: 'https://example.com/contact' }
 */

(function () {
  'use strict';

  // ─── Contact Configuration ───────────────────────────
  // Update these when contact details are available.
  var CONTACT = {
    type: '',   // 'mailto' | 'tel' | 'whatsapp' | 'url'
    value: ''   // email, phone number, or URL
  };
  // ─────────────────────────────────────────────────────

  // Set the current year in the footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact button handler
  var contactBtn = document.getElementById('contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function (e) {
      if (!CONTACT.type || !CONTACT.value) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      var href = '';
      switch (CONTACT.type) {
        case 'mailto':
          href = 'mailto:' + CONTACT.value;
          break;
        case 'tel':
          href = 'tel:' + CONTACT.value;
          break;
        case 'whatsapp':
          href = 'https://wa.me/' + CONTACT.value.replace(/[^0-9]/g, '');
          break;
        case 'url':
          href = CONTACT.value;
          break;
      }

      if (href) {
        window.location.href = href;
      }
    });
  }

})();
