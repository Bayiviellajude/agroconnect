'use client';
import React, { useState } from 'react';

type Status = 'Winner' | 'Finalist' | 'Participant';

interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
  status: Status;
  description: string;
  tech: string;
  prize: string;
  imageUrl: string;
}

const initialActivities: Activity[] = [
{ id: 1, title: 'AgriHack Global 2025', date: 'November 14–16, 2025', location: 'Nairobi, Kenya', status: 'Winner', description: 'Built a real-time crop disease detection system using computer vision and IoT sensors.', tech: 'Computer Vision, IoT, React Native', prize: 'First Place — $5,000', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_18e86a698-1772820568177.png" },
{ id: 2, title: 'FoodTech Innovate Summit', date: 'August 3–5, 2025', location: 'Lagos, Nigeria', status: 'Finalist', description: 'Developed a supply chain transparency platform connecting smallholder farmers directly to urban markets.', tech: 'Blockchain, Node.js, Mobile', prize: 'Top 5 Finalist', imageUrl: "https://images.unsplash.com/photo-1631864032962-950ceb71ba9a" },
{ id: 3, title: 'ClimateCode Sprint', date: 'May 22–24, 2025', location: 'Accra, Ghana', status: 'Participant', description: 'Created a climate-adaptive irrigation scheduling tool.', tech: 'Python, Weather API, Django', prize: '', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_18b5a8c04-1766818253471.png" },
{ id: 4, title: 'AgroData Hackathon', date: 'February 8–10, 2025', location: 'Kampala, Uganda', status: 'Winner', description: 'Designed a predictive yield analysis dashboard for maize and sorghum farmers.', tech: 'TensorFlow, Python, Tableau', prize: 'Best Data Solution — $3,000', imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7aac13f-1767614922377.png" },
{ id: 5, title: 'SmartFarm Challenge', date: 'October 18–20, 2024', location: 'Dar es Salaam, Tanzania', status: 'Finalist', description: 'Built an affordable soil health monitoring system using low-cost sensors.', tech: 'Arduino, MQTT, Vue.js', prize: 'Hardware Innovation Award', imageUrl: '' },
{ id: 6, title: 'GreenTech Africa', date: 'June 12–14, 2024', location: 'Kigali, Rwanda', status: 'Participant', description: 'Our first hackathon. Built a community crop calendar app.', tech: 'React, Firebase, Maps API', prize: '', imageUrl: '' }];


const emptyActivity: Omit<Activity, 'id'> = {
  title: '',
  date: '',
  location: '',
  status: 'Participant',
  description: '',
  tech: '',
  prize: '',
  imageUrl: ''
};

const statusStyles: Record<Status, string> = {
  Winner: 'bg-accent text-accent-foreground',
  Finalist: 'bg-secondary text-primary-foreground',
  Participant: 'bg-muted text-muted-foreground'
};

export default function ActivitiesEditor() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [addingNew, setAddingNew] = useState(false);
  const [newActivity, setNewActivity] = useState<Omit<Activity, 'id'>>(emptyActivity);
  const [saved, setSaved] = useState<number | null>(null);

  const handleEdit = (id: number, field: keyof Omit<Activity, 'id'>, value: string) => {
    setActivities((prev) =>
    prev.map((a) => a.id === id ? { ...a, [field]: value } : a)
    );
  };

  const handleSaveActivity = (id: number) => {
    setSaved(id);
    setTimeout(() => setSaved(null), 2000);
  };

  const handleDelete = (id: number) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const handleAddActivity = () => {
    const newId = activities.length > 0 ? Math.max(...activities.map((a) => a.id)) + 1 : 1;
    setActivities((prev) => [{ id: newId, ...newActivity }, ...prev]);
    setNewActivity(emptyActivity);
    setAddingNew(false);
  };

  return (
    <div className="space-y-6">
      {/* Add new button at top */}
      {!addingNew &&
      <button
        onClick={() => setAddingNew(true)}
        className="w-full border border-dashed border-accent/40 text-accent text-sm py-4 hover:border-accent hover:bg-accent/5 transition-colors uppercase tracking-wider font-semibold">

          + Post New Hackathon Activity
        </button>
      }

      {/* New activity form */}
      {addingNew &&
      <div className="border border-accent/40 bg-card p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider">New Activity</h3>
            <span className="text-xs border border-accent/30 text-accent px-2 py-0.5 uppercase tracking-wider">New</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Event Title</label>
              <input
              value={newActivity.title}
              onChange={(e) => setNewActivity((p) => ({ ...p, title: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="e.g. AgriHack 2026" />

            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Status</label>
              <select
              value={newActivity.status}
              onChange={(e) => setNewActivity((p) => ({ ...p, status: e.target.value as Status }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent">

                <option value="Winner">Winner</option>
                <option value="Finalist">Finalist</option>
                <option value="Participant">Participant</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Date</label>
              <input
              value={newActivity.date}
              onChange={(e) => setNewActivity((p) => ({ ...p, date: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="e.g. March 10–12, 2026" />

            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</label>
              <input
              value={newActivity.location}
              onChange={(e) => setNewActivity((p) => ({ ...p, location: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="e.g. Nairobi, Kenya" />

            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Description</label>
            <textarea
            value={newActivity.description}
            onChange={(e) => setNewActivity((p) => ({ ...p, description: e.target.value }))}
            rows={3}
            className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent resize-none"
            placeholder="What did you build? What problem did it solve?" />

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Technologies (comma-separated)</label>
              <input
              value={newActivity.tech}
              onChange={(e) => setNewActivity((p) => ({ ...p, tech: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="React, Python, IoT" />

            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Prize / Award (optional)</label>
              <input
              value={newActivity.prize}
              onChange={(e) => setNewActivity((p) => ({ ...p, prize: e.target.value }))}
              className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="e.g. First Place — $5,000" />

            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Cover Image URL (optional)</label>
            <input
            value={newActivity.imageUrl}
            onChange={(e) => setNewActivity((p) => ({ ...p, imageUrl: e.target.value }))}
            className="w-full bg-background border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
            placeholder="https://..." />

          </div>

          <div className="flex gap-3 pt-2">
            <button
            onClick={handleAddActivity}
            disabled={!newActivity.title || !newActivity.date || !newActivity.location}
            className="bg-accent text-accent-foreground text-xs font-bold px-8 py-2.5 hover:bg-accent/90 transition-colors uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed">

              Post Activity
            </button>
            <button
            onClick={() => {setAddingNew(false);setNewActivity(emptyActivity);}}
            className="text-xs text-muted-foreground border border-border px-5 py-2.5 hover:text-foreground hover:border-foreground transition-colors uppercase tracking-wider">

              Cancel
            </button>
          </div>
        </div>
      }

      {/* Activities list */}
      {activities.map((activity) =>
      <div key={activity.id} className="border border-border bg-card overflow-hidden">
          {/* Activity header */}
          <div
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/30 transition-colors"
          onClick={() => setEditingId(editingId === activity.id ? null : activity.id)}>

            <div className="flex items-center gap-3 min-w-0">
              <span className={`text-xs font-bold px-2 py-0.5 uppercase tracking-wider flex-shrink-0 ${statusStyles[activity.status]}`}>
                {activity.status}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.date} · {activity.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-3">
              <button
              onClick={(e) => {e.stopPropagation();handleDelete(activity.id);}}
              className="text-xs text-muted-foreground hover:text-red-400 transition-colors px-2 py-1 border border-border hover:border-red-400/50">

                Delete
              </button>
              <span className="text-muted-foreground text-xs">{editingId === activity.id ? '▲' : '▼'}</span>
            </div>
          </div>

          {/* Edit form */}
          {editingId === activity.id &&
        <div className="border-t border-border p-5 space-y-4 bg-background">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Event Title</label>
                  <input
                value={activity.title}
                onChange={(e) => handleEdit(activity.id, 'title', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent" />

                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Status</label>
                  <select
                value={activity.status}
                onChange={(e) => handleEdit(activity.id, 'status', e.target.value as Status)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent">

                    <option value="Winner">Winner</option>
                    <option value="Finalist">Finalist</option>
                    <option value="Participant">Participant</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Date</label>
                  <input
                value={activity.date}
                onChange={(e) => handleEdit(activity.id, 'date', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent" />

                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</label>
                  <input
                value={activity.location}
                onChange={(e) => handleEdit(activity.id, 'location', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent" />

                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Description</label>
                <textarea
              value={activity.description}
              onChange={(e) => handleEdit(activity.id, 'description', e.target.value)}
              rows={3}
              className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent resize-none" />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Technologies</label>
                  <input
                value={activity.tech}
                onChange={(e) => handleEdit(activity.id, 'tech', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
                placeholder="React, Python, IoT" />

                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Prize / Award</label>
                  <input
                value={activity.prize}
                onChange={(e) => handleEdit(activity.id, 'prize', e.target.value)}
                className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
                placeholder="e.g. First Place — $5,000" />

                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Cover Image URL</label>
                <input
              value={activity.imageUrl}
              onChange={(e) => handleEdit(activity.id, 'imageUrl', e.target.value)}
              className="w-full bg-card border border-border text-foreground px-3 py-2 text-sm focus:outline-none focus:border-accent"
              placeholder="https://..." />

              </div>

              <button
            onClick={() => handleSaveActivity(activity.id)}
            className="bg-accent text-accent-foreground text-xs font-bold px-6 py-2.5 hover:bg-accent/90 transition-colors uppercase tracking-wider">

                {saved === activity.id ? '✓ Saved!' : 'Save Activity'}
              </button>
            </div>
        }
        </div>
      )}

      {activities.length === 0 &&
      <div className="text-center py-16 border border-dashed border-border">
          <p className="text-muted-foreground text-sm">No activities yet. Post your first hackathon above.</p>
        </div>
      }
    </div>);

}