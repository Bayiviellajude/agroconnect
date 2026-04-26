'use client';
import React, { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string;
  imageUrl: string;
}

const initialTeam: TeamMember[] = [
{ id: 1, name: 'Amara Diallo', role: 'Team Lead & Full Stack Engineer', bio: 'Agricultural engineer turned developer with 4 years of experience building IoT systems for crop monitoring.', skills: 'React, Node.js, IoT, Python', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1579194a8-1765693310436.png" },
{ id: 2, name: 'Kwame Asante', role: 'Backend Engineer', bio: 'Systems architect specializing in real-time data pipelines and IoT infrastructure.', skills: 'Go, PostgreSQL, MQTT, AWS', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1d279f96e-1776524595991.png" },
{ id: 3, name: 'Fatima Ouedraogo', role: 'UI/UX Designer', bio: 'Designing interfaces that rural farmers can actually use — accessible, multilingual, offline-first.', skills: 'Figma, React, Accessibility, Research', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1488667f3-1764670394761.png" },
{ id: 4, name: 'Tendai Moyo', role: 'Data Scientist', bio: 'Building predictive models for crop yield forecasting and climate adaptation strategies.', skills: 'Python, TensorFlow, R, GIS', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_11ac3b79b-1773837276029.png" },
{ id: 5, name: 'Nadia Kamara', role: 'DevOps & Cloud Engineer', bio: 'Ensuring our solutions scale from hackathon prototype to production-ready deployment.', skills: 'Kubernetes, Terraform, GCP, CI/CD', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1974990b4-1768750265218.png" }];


const emptyMember: Omit<TeamMember, 'id'> = {
  name: '',
  role: '',
  bio: '',
  skills: '',
  imageUrl: ''
};

export default function TeamEditor() {
  const [members, setMembers] = useState<TeamMember[]>(initialTeam);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [addingNew, setAddingNew] = useState(false);
  const [newMember, setNewMember] = useState<Omit<TeamMember, 'id'>>(emptyMember);
  const [saved, setSaved] = useState<number | null>(null);

  const handleEdit = (id: number, field: keyof Omit<TeamMember, 'id'>, value: string) => {
    setMembers((prev) =>
    prev.map((m) => m.id === id ? { ...m, [field]: value } : m)
    );
  };

  const handleSaveMember = (id: number) => {
    setSaved(id);
    setTimeout(() => setSaved(null), 2000);
  };

  const handleDelete = (id: number) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAddMember = () => {
    const newId = Math.max(...members.map((m) => m.id)) + 1;
    setMembers((prev) => [...prev, { id: newId, ...newMember }]);
    setNewMember(emptyMember);
    setAddingNew(false);
  };

  return (
    <div className="space-y-6">
      {/* Member list */}
      {members.map((member) =>
      <div key={member.id} className="border border-border bg-card overflow-hidden">
          {/* Member header */}
          <div
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/30 transition-colors"
          onClick={() => setEditingId(editingId === member.id ? null : member.id)}>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                {member.imageUrl &&
              // eslint-disable-next-line @next/next/no-img-element
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              }
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{member.name || 'Unnamed Member'}</p>
                <p className="text-xs text-muted-foreground">{member.role || 'No role set'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
              onClick={(e) => {e.stopPropagation();handleDelete(member.id);}}
              className="text-xs text-muted-foreground hover:text-red-400 transition-colors px-2 py-1 border border-border hover:border-red-400/50">

                Remove
              </button>
              <span className="text-muted-foreground text-xs">{editingId === member.id ? '▲' : '▼'}</span>
            </div>
          </div>

          {/* Edit form */}
          {editingId === member.id &&
        <div className="border-t border-border p-5 space-y-4 bg-background">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Full Name</label>
                  <input
                value={member.name}
                onChange={(e) => handleEdit(member.id, 'name', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent" />

                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Role / Title</label>
                  <input
                value={member.role}
                onChange={(e) => handleEdit(member.id, 'role', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent" />

                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Bio</label>
                <textarea
              value={member.bio}
              onChange={(e) => handleEdit(member.id, 'bio', e.target.value)}
              rows={2}
              className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent resize-none" />

              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Skills (comma-separated)</label>
                <input
              value={member.skills}
              onChange={(e) => handleEdit(member.id, 'skills', e.target.value)}
              className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="React, Python, IoT" />

              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Profile Image URL</label>
                <input
              value={member.imageUrl}
              onChange={(e) => handleEdit(member.id, 'imageUrl', e.target.value)}
              className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="https://..." />

              </div>
              <button
            onClick={() => handleSaveMember(member.id)}
            className="bg-accent text-accent-foreground text-xs font-bold px-6 py-2 hover:bg-accent/90 transition-colors uppercase tracking-wider">

                {saved === member.id ? '✓ Saved!' : 'Save Member'}
              </button>
            </div>
        }
        </div>
      )}

      {/* Add new member form */}
      {addingNew &&
      <div className="border border-accent/40 bg-card p-5 space-y-4">
          <h3 className="text-sm font-bold text-accent uppercase tracking-wider">New Team Member</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Full Name</label>
              <input
              value={newMember.name}
              onChange={(e) => setNewMember((p) => ({ ...p, name: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="Full name" />

            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Role</label>
              <input
              value={newMember.role}
              onChange={(e) => setNewMember((p) => ({ ...p, role: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="Role / Title" />

            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Bio</label>
            <textarea
            value={newMember.bio}
            onChange={(e) => setNewMember((p) => ({ ...p, bio: e.target.value }))}
            rows={2}
            className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent resize-none"
            placeholder="Short biography" />

          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Skills</label>
            <input
            value={newMember.skills}
            onChange={(e) => setNewMember((p) => ({ ...p, skills: e.target.value }))}
            className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
            placeholder="React, Python, IoT" />

          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Image URL</label>
            <input
            value={newMember.imageUrl}
            onChange={(e) => setNewMember((p) => ({ ...p, imageUrl: e.target.value }))}
            className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
            placeholder="https://..." />

          </div>
          <div className="flex gap-3">
            <button
            onClick={handleAddMember}
            disabled={!newMember.name || !newMember.role}
            className="bg-accent text-accent-foreground text-xs font-bold px-6 py-2 hover:bg-accent/90 transition-colors uppercase tracking-wider disabled:opacity-40">

              Add Member
            </button>
            <button
            onClick={() => {setAddingNew(false);setNewMember(emptyMember);}}
            className="text-xs text-muted-foreground border border-border px-4 py-2 hover:text-foreground transition-colors">

              Cancel
            </button>
          </div>
        </div>
      }

      {/* Add button */}
      {!addingNew &&
      <button
        onClick={() => setAddingNew(true)}
        className="w-full border border-dashed border-border text-muted-foreground text-sm py-4 hover:border-accent hover:text-accent transition-colors uppercase tracking-wider font-medium">

          + Add New Team Member
        </button>
      }
    </div>);

}