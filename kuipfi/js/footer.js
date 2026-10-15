/**
 * KUIPFI Strategic Risk Consultants - Reusable Corporate Footer Component
 * 
 * Usage:
 * Place <kuipfi-footer></kuipfi-footer> (or <div id="site-footer"></div>) on any HTML page.
 * This file is the single source of truth for the site footer.
 * Update links, accreditations, or contact info here once to update all pages.
 */

class KuipfiFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const currentYear = new Date().getFullYear();

        this.innerHTML = `
    <footer class="global-footer" role="contentinfo">
        <div class="wrap">
            <div class="footer-columns">
                <div>
                    <h4>KUIPFI Strategic Risk</h4>
                    <ul>
                        <li><a href="index.html#about">About Our Firm</a></li>
                        <li><a href="services.html">Our Services</a></li>
                        <li><a href="index.html#uniform">Our Identity</a></li>
                        <li><a href="index.html#compliance">Statutory Compliance</a></li>
                        <li><a href="contact.html">Request Consultation</a></li>
                    </ul>
                    <p class="footer-tagline">Protecting Assets. Managing Risk.<br>Enabling Growth. Building Trust.</p>
                </div>
                <div>
                    <h4>Key Services</h4>
                    <ul>
                        <li><a href="services.html#strategic-risk">Strategic Risk Management</a></li>
                        <li><a href="services.html#loss-prevention">Loss Prevention</a></li>
                        <li><a href="services.html#security-consulting">Security Consulting</a></li>
                        <li><a href="services.html#fraud-risk">Fraud Risk Management</a></li>
                        <li><a href="services.html#investigations">Investigations</a></li>
                        <li><a href="services.html#business-resilience">Business Resilience</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Governance</h4>
                    <ul>
                        <li><a href="index.html#compliance">PSIRA Accreditation</a></li>
                        <li><a href="index.html#compliance">NBCPSS Bargaining Council</a></li>
                        <li><a href="index.html#compliance">SAPS Firearm Compliance</a></li>
                        <li><a href="index.html#compliance">B-BBEE Transformation</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact &amp; Enquiries</h4>
                    <ul>
                        <li><a href="tel:+27112348900">+27 (0) 11 234 8900</a></li>
                        <li><a href="mailto:operations@kuipfi.co.za">operations@kuipfi.co.za</a></li>
                        <li><a href="mailto:tenders@kuipfi.co.za">tenders@kuipfi.co.za</a></li>
                        <li><a href="contact.html">Serving Clients Nationwide</a></li>
                    </ul>
                </div>
            </div>

            <!-- Accreditations Strip -->
            <div class="footer-accreditation-row">
                <div class="accreditation-text">
                    <span>PSIRA Reg. Subcontractor</span><span class="sep">·</span><span>NBCPSS Compliant</span><span
                        class="sep">·</span><span>SAPS Firearm Accredited</span><span class="sep">·</span><span>B-BBEE
                        Level 1 / EME</span><span class="sep">·</span><span>SARS &amp; COID Verified</span>
                </div>
                <div class="footer-social-links">
                    <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>

            <!-- Copyright & Disclaimer -->
            <div class="footer-legal-bottom">
                <span>&copy; ${currentYear} KUIPFI Strategic Risk Consultants. All rights reserved.</span>
                <span class="footer-developer-credit">Website developed by <a href="https://vylex.co.za" target="_blank"
                        rel="noopener noreferrer">Vylex</a></span>
                <span>Protecting Assets · Managing Risk · Enabling Growth · Building Trust</span>
            </div>
        </div>
    </footer>`;
    }
}

// Register custom element
if (!customElements.get('kuipfi-footer')) {
    customElements.define('kuipfi-footer', KuipfiFooter);
}

// Fallback support for placeholder elements like <div id="site-footer"></div>
document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('site-footer') || document.getElementById('global-footer');
    if (placeholder && !placeholder.querySelector('.global-footer')) {
        const temp = document.createElement('kuipfi-footer');
        placeholder.replaceWith(temp);
    }
});
