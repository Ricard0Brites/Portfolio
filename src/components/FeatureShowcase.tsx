import React from 'react';

// Mock data for flat lists
const flatFeatures = ['Vision Detection', 'Audio Tracking', 'Damage Response', 'Pathfinding'];

// Mock data for hierarchical lists
const hierarchicalFeatures = [
  { category: "Enemy Detection", items: ["Vision", "Audio", "Damage"] },
  { category: "Pathing", items: ["A* Navigation", "Dynamic Re-routing"] },
  { category: "Movement", items: ["Evasive", "Flanking"] }
];

const FeatureShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-zinc-50">
      
      {/* 1. Tag/Badge Collection */}
      <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
        <h3 className="font-bold mb-4">1. Tags/Chips</h3>
        <div className="flex flex-wrap gap-2">
          {flatFeatures.map(f => (
            <span key={f} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Hierarchical Labeled Group (The solution) */}
      <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
        <h3 className="font-bold mb-4">2. Hierarchical Labeled Group</h3>
        <div className="flex flex-col gap-3">
          {hierarchicalFeatures.map(group => (
            <div key={group.category} className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold text-sm text-zinc-900 w-32">{group.category}:</span>
              <div className="flex flex-wrap gap-1">
                {group.items.map(sub => (
                  <span key={sub} className="text-xs bg-zinc-100 px-2 py-0.5 rounded text-zinc-700 border border-zinc-200">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeatureShowcase;
