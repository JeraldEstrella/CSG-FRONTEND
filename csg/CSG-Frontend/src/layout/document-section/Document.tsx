import { useState } from 'react';
import DocumentCard from '../../components/document-card/Document-card';
import Modal from '../../components/modal/Modal';
import './document.css';
import Typography from '../../components/typography/Typography';

type DocumentItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  image?: string;
};

export default function Document() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample document data
  const documents: DocumentItem[] = [
    {
      id: '1',
      title: 'Detailed minutes regarding every departed discussion',
      description: 'Comprehensive documentation displaying proposals',
      category: 'minutes',
      date: 'December 2024'
    },
    {
      id: '2',
      title: 'Official doctrines that impact student careously',
      description: 'Capture policy changes and initiatives',
      category: 'policies',
      date: 'November 2024'
    },
    {
      id: '3',
      title: 'Individual projects and activity plans',
      description: 'See student-directed co-curriculars and initiatives',
      category: 'projects',
      date: 'October 2024'
    },
    {
      id: '4',
      title: 'Clear and accessible financial movements',
      description: 'Track line-items, budgets and categorical allotment',
      category: 'financials',
      date: 'September 2024'
    },
    {
      id: '5',
      title: 'Annual transparency report 2024',
      description: 'Complete overview of activities and achievements',
      category: 'reports',
      date: 'August 2024'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'minutes', label: 'Meeting Minutes' },
    { id: 'policies', label: 'Policies' },
    { id: 'projects', label: 'Projects' },
    { id: 'financials', label: 'Financial Reports' },
    { id: 'reports', label: 'Annual Reports' },
  ];

  const filteredDocuments = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  const handleDocumentClick = (doc: DocumentItem) => {
    setSelectedDocument(doc);
    setIsModalOpen(true);
  };

  const displayedDocument = selectedDocument || documents[0];

  return (
    <section id="documents" className="document-container">
      <div className="document-header">
        <Typography size='text-md' color='text-dark'>
          Documents
        </Typography>
        <Typography size='text-sm' color='text-ghost'>
          Explore official documents from student government
        </Typography>
      </div>
      <div className="document-layout-wrapper">
        <div className="document-layout">
          {/* Sidebar Navigation */}
          <aside className="document-navigation">
          <Typography size='text-sm' color='text-dark'>
            Categories
          </Typography>
            <nav className="nav-menu">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`nav-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Document Grid */}
          <main className="document-content">
            <div className="document-grid">
              {filteredDocuments.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  id={doc.id}
                  title={doc.title}
                  description={doc.description}
                  date={doc.date}
                  image={doc.image}
                  onClick={() => handleDocumentClick(doc)}
                />
              ))}
            </div>
          </main>
        </div>

        {/* Always Visible Document Preview Panel */}
        <aside className="document-preview-panel">
          <div className="preview-content">
            {/* Image Section */}
            <div className="preview-image">
              {displayedDocument.image ? (
                <img src={displayedDocument.image} alt={displayedDocument.title} />
              ) : (
                <div className="preview-placeholder">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
              )}
            </div>

            {/* Text Section */}
            <div className="preview-body">
              {displayedDocument.date && (
                <p className="preview-date">{displayedDocument.date}</p>
              )}
              <h2 className="preview-title">{displayedDocument.title}</h2>
              <p className="preview-description">{displayedDocument.description}</p>
              
              <button className="preview-download-btn">
                Download Document
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}