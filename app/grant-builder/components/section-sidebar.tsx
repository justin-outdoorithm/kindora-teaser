"use client"

interface SectionSidebarProps {
  sections: { id: string; title: string }[]
  activeSectionId: string
  onSectionClick: (sectionId: string) => void
}

export function SectionSidebar({ sections, activeSectionId, onSectionClick }: SectionSidebarProps) {
  return (
    <div>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionClick(section.id)}
          className={`block w-full text-left px-4 py-2 rounded-md ${
            activeSectionId === section.id ? "bg-teal-100 text-teal-700 font-medium" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {section.title}
        </button>
      ))}
    </div>
  )
}
