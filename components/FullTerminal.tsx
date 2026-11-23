'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { X, Minimize2, Maximize2, Terminal as TerminalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface CommandOutput {
  command: string;
  output: string[];
  isError?: boolean;
  raw?: boolean;
}

interface ProjectData {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const projectsData: ProjectData[] = [
  { name: 'Suiguard', description: 'Security tool for Sui blockchain', tech: ['JavaScript', 'Web3', 'Sui'], github: 'https://github.com/ChilliRoger/suiguard', live: 'https://chilliroger.github.io/suiguard' },
  { name: 'Invoice Generator', description: 'Professional invoice generation tool', tech: ['JavaScript', 'PDF'], github: 'https://github.com/ChilliRoger/invoice-generator', live: 'https://invoice-generator-ten-iota.vercel.app/' },
  { name: 'BugBuster Academy', description: 'Gamified debugging learning platform', tech: ['JavaScript', 'Education'], github: 'https://github.com/ChilliRoger/bugbuster-academy', live: 'https://www.npmjs.com/package/bugbuster-academy' },
  { name: 'Enthiran 2.0', description: 'AI-powered application', tech: ['CSS', 'AI', 'ML'], github: 'https://github.com/ChilliRoger/enthiran2.0', live: 'https://enthiran20.vercel.app/' },
  { name: 'MyTerminal1', description: 'Web-based terminal emulator', tech: ['TypeScript', 'Terminal'], github: 'https://github.com/ChilliRoger/myterminal1', live: 'https://myterminal1.vercel.app/' },
  { name: 'PDF Merger', description: 'Merge multiple PDF files online', tech: ['Python', 'PDF'], github: 'https://github.com/ChilliRoger/pdf-merger', live: 'https://pdf-merger-eta-rust.vercel.app/' },
];

const skillsData = {
  languages: ['C', 'C++', 'Java', 'Kotlin', 'Python', 'Go', 'Solidity', 'JavaScript', 'TypeScript'],
  frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
  backend: ['Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI'],
  databases: ['MongoDB', 'MySQL', 'SQLite', 'Oracle'],
  cloud: ['AWS', 'Google Cloud', 'Firebase'],
  tools: ['Git', 'GitLab', 'NPM', 'Postman', 'Apache'],
};

const educationData = {
  degree: 'Bachelor of Engineering in Computer Science',
  institution: 'LICET',
  location: 'Chennai, India',
  period: '2023 - Present',
  gpa: '7.7/10',
};

const contactData = {
  email: 'francis.roger.a.16@gmail.com',
  github: 'https://github.com/ChilliRoger',
  linkedin: 'https://www.linkedin.com/in/francis16102005/',
  twitter: 'https://x.com/roger_x_jr',
  leetcode: 'https://leetcode.com/u/LUO3mZynOY/',
};

const BANNER_WIDTH = 63;
const boxRow = (text = '') => {
  const len = text.length;
  const left = Math.floor((BANNER_WIDTH - len) / 2);
  return '|' + ' '.repeat(left) + text + ' '.repeat(BANNER_WIDTH - len - left) + '|';
};

// Plain-ASCII art so every glyph is the same width in any monospace font.
// Each letter is 5 rows tall and 7 columns wide; "~" stands for a backslash.
const letters = {
  R: [' ____  ', '|  _ ~ ', '| |_) |', '|  _ < ', '|_| ~_~'],
  O: ['  ___  ', ' / _ ~ ', '| | | |', '| |_| |', ' ~___/ '],
  G: ['  ____ ', ' / ___|', '| |  _ ', '| |_| |', ' ~____|'],
  E: [' _____ ', '| ____|', '|  _|  ', '| |___ ', '|_____|'],
};
const LETTER_GAP = '   ';
const BACKSLASH = String.fromCharCode(92);
const rogerArt = [0, 1, 2, 3, 4].map((row) =>
  [letters.R, letters.O, letters.G, letters.E, letters.R]
    .map((l) => l[row].split('~').join(BACKSLASH))
    .join(LETTER_GAP)
);
const artWidth = Math.max(...rogerArt.map((l) => l.length));

const welcomeBanner = [
  '+' + '='.repeat(BANNER_WIDTH) + '+',
  boxRow(),
  ...rogerArt.map((l) => boxRow(l.padEnd(artWidth))),
  boxRow(),
  boxRow('ROGER PORTFOLIO TERMINAL v1.0'),
  boxRow('UI/UX Designer | Fullstack Developer'),
  boxRow('Blockchain Enthusiast'),
  boxRow(),
  '+' + '='.repeat(BANNER_WIDTH) + '+',
  '',
  "Welcome to Francis Roger's Portfolio Terminal!",
  'Type "help" to see available commands.',
  '',
];

export default function FullTerminal() {
  const router = useRouter();
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [currentPath] = useState('~');


  useEffect(() => {
    setHistory([{ command: '', output: welcomeBanner, raw: true }]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.toLowerCase().split(/\s+/);
    const rawArgs = trimmedCmd.split(/\s+/).slice(1);
    let output: string[] = [];
    let isError = false;

    switch (command) {
      case 'help':
        output = [
          'Available Commands:',
          '',
          '  NAVIGATION:',
          '    help              - Show this help message',
          '    clear             - Clear the terminal screen',
          '    exit              - Return to portfolio homepage',
          '',
          '  INFORMATION:',
          '    whoami            - Display user information',
          '    about             - About Francis Roger',
          '    education         - Display education details',
          '    contact           - Show contact information',
          '',
          '  PORTFOLIO:',
          '    projects [filter] - List all projects (optional: filter by tech)',
          '    project <name>    - Show detailed project info',
          '    skills [category] - Display skills (optional: category)',
          '',
          '  SYSTEM:',
          '    pwd               - Print working directory',
          '    ls [dir]          - List directory contents',
          '    cat <file>        - Display file contents',
          '    echo <text>       - Display text',
          '    date              - Show current date and time',
          '    cowsay <text>     - ASCII cow says your text',
          '    matrix            - Enter the matrix...',
          '',
          '  SOCIAL:',
          '    github            - Open GitHub profile',
          '    linkedin          - Open LinkedIn profile',
          '    twitter           - Open Twitter/X profile',
          '    leetcode          - Open LeetCode profile',
          '',
        ];
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        router.push('/');
        return;

      case 'whoami':
        output = [
          'Francis Roger',
          'UI/UX Designer | Fullstack Developer | Blockchain Buff',
          '',
          'Student at LICET, Chennai',
          'President @ NSS & Make a Difference Club',
        ];
        break;

      case 'about':
        output = [
          '+---------------------------------------------+',
          '|         FRANCIS ROGER - DEVELOPER           |',
          '+---------------------------------------------+',
          '',
          '  Role: UI/UX Designer & Fullstack Developer',
          '  Focus: Web3, Blockchain, AI/ML',
          '  Location: Chennai, India',
          '',
          '  Achievements:',
          '  • BattleCode 2025 (MIT) - AI Robot Development',
          '  • Ideathon 2024 (Taipei) - Good Idea Award Winner (Top 0.3%)',
          '  • Pragyan 2024 (NIT Trichy) - Runner-up',
          '',
          '  Current Projects: Open-source projects',
          '  Experience: Web Development, Mobile Testing, Security',
          '',
        ];
        break;

      case 'education':
        output = [
          'EDUCATION',
          '---------',
          '',
          `Degree: ${educationData.degree}`,
          `Institution: ${educationData.institution}`,
          `Location: ${educationData.location}`,
          `Period: ${educationData.period}`,
          `GPA: ${educationData.gpa}`,
          '',
          'Key Achievements:',
          '  • BattleCode 2025, MIT - Built AI robot in Java',
          '  • Ideathon 2024, Taipei - Won Good Idea Award (Top 0.3%)',
          '  • Pragyan 2024, NIT Trichy - Runner-up (300+ participants)',
        ];
        break;

      case 'contact':
        output = [
          'CONTACT INFORMATION',
          '------------------',
          '',
          `Email: ${contactData.email}`,
          `GitHub: ${contactData.github}`,
          `LinkedIn: ${contactData.linkedin}`,
          `Twitter/X: ${contactData.twitter}`,
          `LeetCode: ${contactData.leetcode}`,
          '',
          'Availability: Open to new opportunities',
          'Location: Available for remote work',
        ];
        break;

      case 'projects':
        const filter = args[0];
        let filtered = projectsData;
        
        if (filter) {
          filtered = projectsData.filter(p => 
            p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase()))
          );
        }

        if (filtered.length === 0) {
          output = [`No projects found matching "${filter}"`];
          isError = true;
        } else {
          output = [
            `PROJECTS ${filter ? `(filtered by: ${filter})` : ''}`,
            '---------',
            '',
            ...filtered.map(p => 
              `  • ${p.name}\n    ${p.description}\n    Tech: ${p.tech.join(', ')}\n`
            ),
            `Total: ${filtered.length} project(s)`,
            '',
            'Use "project <name>" for details',
          ];
        }
        break;

      case 'project':
        const projectName = args.join(' ');
        const project = projectsData.find(p => 
          p.name.toLowerCase() === projectName.toLowerCase()
        );

        if (!project) {
          output = [
            `Project "${projectName}" not found.`,
            'Use "projects" to see all available projects.',
          ];
          isError = true;
        } else {
          output = [
            '+--------------------------------------------+',
            `|  ${project.name.toUpperCase().padEnd(42)} |`,
            '+--------------------------------------------+',
            '',
            `Description: ${project.description}`,
            '',
            `Technologies: ${project.tech.join(', ')}`,
            '',
            `GitHub: ${project.github}`,
            `Live Demo: ${project.live}`,
            '',
          ];
        }
        break;

      case 'skills':
        const category = args[0];
        
        if (category) {
          const categoryData = skillsData[category as keyof typeof skillsData];
          if (categoryData) {
            output = [
              `${category.toUpperCase()} SKILLS`,
              '---------',
              '',
              ...categoryData.map(skill => `  • ${skill}`),
            ];
          } else {
            output = [
              `Category "${category}" not found.`,
              'Available categories: languages, frontend, backend, databases, cloud, tools',
            ];
            isError = true;
          }
        } else {
          output = [
            'SKILLS OVERVIEW',
            '--------------',
            '',
            `Languages: ${skillsData.languages.join(', ')}`,
            '',
            `Frontend: ${skillsData.frontend.join(', ')}`,
            '',
            `Backend: ${skillsData.backend.join(', ')}`,
            '',
            `Databases: ${skillsData.databases.join(', ')}`,
            '',
            `Cloud: ${skillsData.cloud.join(', ')}`,
            '',
            `Tools: ${skillsData.tools.join(', ')}`,
            '',
            'Use "skills <category>" for specific details',
          ];
        }
        break;

      case 'pwd':
        output = [currentPath];
        break;

      case 'ls':
        const dir = args[0] || '.';
        if (dir === '.' || dir === currentPath) {
          output = [
            'projects/',
            'skills.txt',
            'education.txt',
            'contact.txt',
            'README.md',
          ];
        } else if (dir === 'projects' || dir === 'projects/') {
          output = projectsData.map(p => `${p.name.toLowerCase().replace(/ /g, '-')}/`);
        } else {
          output = [`ls: cannot access '${dir}': No such file or directory`];
          isError = true;
        }
        break;

      case 'cat':
        const file = args[0];
        if (!file) {
          output = ['cat: missing file operand'];
          isError = true;
        } else if (file === 'skills.txt') {
          output = [
            'FRANCIS ROGER - SKILLS',
            '=====================',
            '',
            'Languages: C, C++, Java, Kotlin, Python, Go, Solidity, JavaScript, TypeScript',
            'Frontend: HTML5, CSS3, React, Next.js, Tailwind CSS, Shadcn UI',
            'Backend: Node.js, Express.js, Django, Flask, FastAPI',
            'Databases: MongoDB, MySQL, SQLite, Oracle',
            'Cloud: AWS, Google Cloud, Firebase',
          ];
        } else if (file === 'README.md') {
          output = [
            '# Francis Roger - Portfolio Terminal',
            '',
            'Welcome to my interactive portfolio terminal!',
            '',
            '## About Me',
            'UI/UX Designer | Fullstack Developer | Blockchain Buff',
            '',
            '## Quick Links',
            '- GitHub: https://github.com/ChilliRoger',
            '- LinkedIn: https://www.linkedin.com/in/francis16102005/',
            '- Email: francis.roger.a.16@gmail.com',
            '',
            'Type `help` for available commands.',
          ];
        } else {
          output = [`cat: ${file}: No such file or directory`];
          isError = true;
        }
        break;

      case 'echo':
        output = [rawArgs.join(' ')];
        break;

      case 'date':
        output = [new Date().toString()];
        break;

      case 'cowsay':
        const text = rawArgs.join(' ') || 'Hello, World!';
        const border = '-'.repeat(text.length + 2);
        output = [
          ` ${border}`,
          `< ${text} >`,
          ` ${border}`,
          '        \\   ^__^',
          '         \\  (oo)\\_______',
          '            (__)\\       )\\/\\',
          '                ||----w |',
          '                ||     ||',
        ];
        break;

      case 'matrix':
        output = [
          'Entering the Matrix...',
          '',
          '01001000 01100101 01101100 01101100 01101111',
          '01010111 01101111 01110010 01101100 01100100',
          '',
          'Wake up, Neo...',
          'The Matrix has you...',
          'Follow the white rabbit.',
          '',
          '(Just kidding! Type "clear" to continue)',
        ];
        break;

      case 'github':
        window.open(contactData.github, '_blank');
        output = ['Opening GitHub profile...'];
        break;

      case 'linkedin':
        window.open(contactData.linkedin, '_blank');
        output = ['Opening LinkedIn profile...'];
        break;

      case 'twitter':
        window.open(contactData.twitter, '_blank');
        output = ['Opening Twitter/X profile...'];
        break;

      case 'leetcode':
        window.open(contactData.leetcode, '_blank');
        output = ['Opening LeetCode profile...'];
        break;

      default:
        output = [
          `Command not found: ${command}`,
          'Type "help" for available commands.',
        ];
        isError = true;
    }

    setHistory(prev => [...prev, { command: trimmedCmd, output, isError }]);
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      setCurrentInput('');
    }
  };

  return (
    <div className={`${mono.className} [font-variant-ligatures:none] fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4`}>
      <div
        className={`bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-5xl h-[85vh]'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] border-b border-gray-800 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer transition-colors" onClick={() => router.push('/')} />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer transition-colors" onClick={() => setIsMaximized(false)} />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer transition-colors" onClick={() => setIsMaximized(!isMaximized)} />
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <TerminalIcon className="h-4 w-4" />
              <span className="font-mono text-sm">roger@portfolio:~</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              aria-label="Toggle maximize"
              className="p-1 hover:bg-gray-700 rounded transition-colors"
            >
              {isMaximized ? <Minimize2 className="h-4 w-4 text-gray-400" /> : <Maximize2 className="h-4 w-4 text-gray-400" />}
            </button>
            <button
              onClick={() => router.push('/')}
              aria-label="Close terminal"
              className="p-1 hover:bg-gray-700 rounded transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm text-gray-200 bg-[#0a0a0a]"
          onClick={() => inputRef.current?.focus()}
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: '#333 transparent'
          }}
        >
          {history.map((item, index) => (
            <div key={index} className="mb-1">
              {item.command && (
                <div className="flex items-center">
                  <span className="text-green-500 font-semibold">roger@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500 mx-2">$</span>
                  <span className="text-gray-200">{item.command}</span>
                </div>
              )}
              <div className={item.isError ? 'text-red-400' : 'text-gray-300'}>
                {item.output.map((line, i) => (
                  <div key={i} className={item.raw ? 'whitespace-pre overflow-x-auto' : 'whitespace-pre-wrap break-words'}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center">
            <span className="text-green-500 font-semibold">roger@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500 mx-2">$</span>
            <input
              ref={inputRef}
              aria-label="Terminal input"
              autoComplete="off"
              autoCapitalize="off"
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-gray-200 caret-green-500"
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-[#1a1a1a] border-t border-gray-800 px-4 py-1.5 flex items-center justify-between text-xs font-mono text-gray-500">
          <div className="flex items-center gap-4">
            <span>Ctrl+L: clear | Ctrl+C: cancel | ↑↓: history</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{history.filter(h => h.command).length} commands</span>
          </div>
        </div>
      </div>
    </div>
  );
}
