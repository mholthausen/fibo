import React from 'react';
import './index.css';

const TermsOfService: React.FC = () => {

  return (
    <div className="terms-of-service">
      <h2>Terms of Service</h2>
      <p>
        Welcome to our application. By using our service, you agree to the
        following terms and conditions:
      </p>

      <h3>1. Introduction</h3>
      <p>
        These Terms of Service govern your use of our application. By accessing
        or using the application, you agree to be bound by these terms. If you
        do not agree to these terms, you may not use the application.
      </p>

      <h3>2. Use of the Application</h3>
      <p>
        You agree to use the application only for lawful purposes and in a way
        that does not infringe the rights of others or restrict or inhibit their
        use and enjoyment of the application.
      </p>

      <h3>3. Intellectual Property</h3>
      <p>
        All content included in the application, such as text, graphics, logos,
        images, and software, is our property its content suppliers and is
        protected by international copyright laws.
      </p>

      <h3>4. BSD 2-Clause License</h3>
      <p>
        This application is licensed under the BSD 2-Clause License. The
        following terms apply:
      </p>
      <div className="license-text">
        Redistribution and use in source and binary forms, with or without
        modification, are permitted provided that the following conditions are
        met:
        <br />
        1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
        <br />
        2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
        <br />
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
        IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
        TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
        PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
        HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
        TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
        PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
        LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
        NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
        SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      </div>

      <h3>5. Limitation of Liability</h3>
      <p>
        We will not be liable for any damages arising from the use of this
        application, including but not limited to direct, indirect, incidental,
        punitive, and consequential damages.
      </p>

      <h3>6. Changes to the Terms</h3>
      <p>
        We reserve the right to modify these terms at any time. Any changes will
        be effective immediately upon posting to the application. Your continued
        use of the application after any changes constitutes your acceptance of
        the new terms.
      </p>

      <h3>7. Governing Law</h3>
      <p>
        These terms are governed by and construed in accordance with the laws of
        the country in which we are headquartered, without regard to its
        conflict of law principles.
      </p>
    </div>
  );
};

export default TermsOfService;
