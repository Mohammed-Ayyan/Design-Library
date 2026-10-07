import React from 'react';

export const SaasTeamPage: React.FC = () => {
  return (
    <main>
      <header>
        <p>ORGANIZATIONAL GOVERNANCE // RBAC ACCESS CONTROLS // ISO 27001 AUDIT</p>
        <h1>Team Members & Security Permissions</h1>
        <p>
          Role-based access matrix, hardware security key enforcement, and cryptographic session management
          across engineering, operations, and audit teams.
        </p>
        <div>
          <button>Invite Organization Member</button>
          <button>Audit Security Logins</button>
          <button>Export RBAC Compliance Sheet</button>
        </div>
      </header>

      <section>
        <h2>Active Organization Member Directory</h2>
        <p>Authorized engineers with active cryptographic sessions and API key access tokens.</p>

        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Work Email</th>
              <th>Assigned Role</th>
              <th>Hardware MFA</th>
              <th>Last Active Session</th>
              <th>Access Key Status</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Aris Thorne</td>
              <td>aris.thorne@nexuscloud.io</td>
              <td>PRINCIPAL ARCHITECT</td>
              <td>ENFORCED (YubiKey 5C)</td>
              <td>4 minutes ago</td>
              <td>ACTIVE (3 KEYS)</td>
              <td><button>Modify Access</button></td>
            </tr>
            <tr>
              <td>Elena Rostova</td>
              <td>elena.rostova@nexuscloud.io</td>
              <td>STAFF SRE ENGINEER</td>
              <td>ENFORCED (FIDO2)</td>
              <td>12 minutes ago</td>
              <td>ACTIVE (2 KEYS)</td>
              <td><button>Modify Access</button></td>
            </tr>
            <tr>
              <td>Kaito Tanaka</td>
              <td>kaito.tanaka@nexuscloud.io</td>
              <td>SECURITY AUDITOR</td>
              <td>ENFORCED (FIDO2)</td>
              <td>1 hour ago</td>
              <td>READ-ONLY</td>
              <td><button>Modify Access</button></td>
            </tr>
            <tr>
              <td>DevOps Automation Service</td>
              <td>bot-ci-runner@nexuscloud.io</td>
              <td>SERVICE PRINCIPAL</td>
              <td>MTLS CERTIFICATE</td>
              <td>Live (Continuous)</td>
              <td>MACHINE TOKEN</td>
              <td><button>Revoke Token</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Role-Based Permission Matrix</h2>
        <div>
          <article>
            <h3>Administrator</h3>
            <p>Full sovereign access to cluster nodes, billing instruments, and security revocation.</p>
            <ul>
              <li>Manage organization billing and subscriptions</li>
              <li>Provision and decommission worker node pools</li>
              <li>Trigger emergency Canary rollbacks</li>
              <li>Enforce team-wide security policies</li>
            </ul>
            <button>Review 2 Members</button>
          </article>

          <article>
            <h3>Infrastructure Engineer</h3>
            <p>Deployment dispatch, container workload balancing, and telemetry inspection.</p>
            <ul>
              <li>Deploy code commits to Canary rings</li>
              <li>Inspect real-time packet capture feeds</li>
              <li>Rotate temporary environment secrets</li>
              <li>No access to billing payment methods</li>
            </ul>
            <button>Review 5 Members</button>
          </article>

          <article>
            <h3>Compliance Auditor</h3>
            <p>Read-only access to audit logs, SOC 2 compliance reports, and TLS cipher suites.</p>
            <ul>
              <li>Inspect immutable deployment ledgers</li>
              <li>Download signed tax invoices and receipts</li>
              <li>Verify cryptographic sign-offs</li>
              <li>Zero permission to mutate active workloads</li>
            </ul>
            <button>Review 1 Member</button>
          </article>
        </div>
      </section>

      <section>
        <h2>Invite a New Team Member</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Member Full Name</label>
            <input type="text" placeholder="e.g. Katherine Johnson" />
          </div>

          <div>
            <label>Work Email Address</label>
            <input type="email" placeholder="katherine@analytical-mesh.io" />
          </div>

          <div>
            <label>Assigned Permission Role</label>
            <select defaultValue="engineer">
              <option value="engineer">Infrastructure Engineer</option>
              <option value="admin">Administrator (Full Access)</option>
              <option value="auditor">Compliance Auditor (Read-Only)</option>
              <option value="viewer">Guest Observer (Limited Dashboard)</option>
            </select>
          </div>

          <button type="submit">Dispatch Cryptographic Invitation Link</button>
        </form>
      </section>

      <footer>
        <p>© 2026 NexusCloud Identity & Access Architecture • Styled Exclusively with Design Style Library</p>
      </footer>
    </main>
  );
};
