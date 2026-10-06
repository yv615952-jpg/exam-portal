const subjects = [
  'Core Java',
  'Data Science',
  'Electronics',
  'TCS',
  'OS'
];

const state = {
  selectedYear: '',
  selectedSubject: '',
  selectedTest: '',
  currentQuestions: [],
  currentIndex: 0,
  answers: [],
  timer: 1200,
  timerId: null,
  logInName: ''
};

const mockBank = {
  'Core Java': [
    [
      ['Which keyword is used to create a subclass in Java?', ['class', 'extends', 'implements', 'interface'], 1],
      ['Which of the following is a primitive data type in Java?', ['String', 'int', 'ArrayList', 'Object'], 1],
      ['Which method is the entry point of any Java program?', ['main()', 'start()', 'run()', 'init()'], 0],
      ['What is the default value of a boolean variable in Java?', ['true', 'false', '0', 'null'], 1],
      ['Which keyword is used to define a class in Java?', ['class', 'struct', 'interface', 'enum'], 0],
      ['Which of the following is used to implement inheritance in Java?', ['extends', 'implements', 'interface', 'new'], 0],
      ['Which collection stores key-value pairs?', ['ArrayList', 'HashMap', 'Queue', 'Set'], 1],
      ['Which access modifier makes a class member accessible only within the same class?', ['public', 'private', 'protected', 'default'], 1],
      ['What does JVM stand for?', ['Java Virtual Machine', 'Java Verified Method', 'Java Variable Module', 'Java Virtual Module'], 0],
      ['Which loop executes at least once even if the condition is false?', ['for', 'while', 'do-while', 'switch'], 2],
      ['Which statement is used to stop a loop immediately?', ['continue', 'break', 'return', 'throw'], 1],
      ['Which operator is used to compare equality in Java?', ['=', '==', '===', '!='], 1],
      ['Which one is not a Java keyword?', ['static', 'finally', 'function', 'new'], 2],
      ['Method overloading is achieved by changing the?', ['return type', 'method name', 'parameter list', 'access modifier'], 2],
      ['Which class is the root of all Java classes?', ['Object', 'String', 'Class', 'Runtime'], 0],
      ['Which keyword is used to prevent method overriding?', ['final', 'static', 'abstract', 'private'], 0],
      ['What is the size of a byte in Java?', ['4 bits', '8 bits', '16 bits', '32 bits'], 1],
      ['Which constructor is called automatically when an object is created?', ['default constructor', 'static constructor', 'final constructor', 'private constructor'], 0],
      ['Which method is used to print output in Java?', ['println()', 'printLine()', 'echo()', 'write()'], 0],
      ['Which of the following is an interface in Java?', ['ArrayList', 'List', 'HashSet', 'Vector'], 1]
    ],
    [
      ['Which of the following is a valid Java identifier?', ['123abc', 'class', 'myVariable', 'hello-world'], 2],
      ['What is used to handle exceptions in Java?', ['try-catch', 'if-else', 'switch', 'do-while'], 0],
      ['Which package contains the Scanner class?', ['java.util', 'java.io', 'java.lang', 'java.net'], 0],
      ['Which method is called when an object is garbage collected?', ['finalize()', 'dispose()', 'destroy()', 'clear()'], 0],
      ['Which Java feature allows one interface to be used by multiple implementations?', ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'], 1],
      ['Which of the following is a checked exception?', ['NullPointerException', 'ArithmeticException', 'IOException', 'ArrayIndexOutOfBoundsException'], 2],
      ['What is the output of 10 / 3 in Java?', ['3.33', '3', '4', '3.0'], 1],
      ['Which keyword allows a variable to belong to a class rather than an instance?', ['final', 'static', 'private', 'protected'], 1],
      ['A subclass can access parent class members if they are?', ['private', 'public', 'final', 'static'], 1],
      ['Which of these classes is not a wrapper class?', ['Integer', 'Double', 'Character', 'StringBuilder'], 3],
      ['Which method converts a string to integer?', ['parseInt()', 'toInt()', 'convertInt()', 'stringToInt()'], 0],
      ['Which keyword indicates that a method may not be overridden?', ['abstract', 'final', 'strictfp', 'volatile'], 1],
      ['How many bytes does int occupy in Java?', ['2', '4', '8', '16'], 1],
      ['Which loop is best when the number of iterations is known?', ['for', 'while', 'do-while', 'switch'], 0],
      ['Which statement skips the current iteration of a loop?', ['break', 'continue', 'return', 'goto'], 1],
      ['Which of the following is a valid array declaration?', ['int[] arr = new int[5];', 'int arr() = new int[5];', 'int arr = new int[];', 'int arr[5] = new int;'], 0],
      ['Which modifier is used for abstract methods?', ['final', 'static', 'abstract', 'volatile'], 2],
      ['Which operator is unary not?', ['!', '&&', '||', '~'], 0],
      ['Which class is used for input from keyboard?', ['Scanner', 'Math', 'String', 'System'], 0],
      ['Which block is executed whether or not an exception occurs?', ['catch', 'finally', 'throw', 'throws'], 1]
    ]
  ],
  'Data Science': [
    [
      ['Which of the following is a core step in data science?', ['Cooking', 'Data collection', 'Painting', 'Typing'], 1],
      ['What is the purpose of data cleaning?', ['To remove noise and errors', 'To delete files', 'To write code', 'To print reports'], 0],
      ['Which library is widely used for data analysis in Python?', ['Pandas', 'Excel', 'Photoshop', 'Notepad'], 0],
      ['What does EDA stand for?', ['Effective Data Analysis', 'Exploratory Data Analysis', 'Easy Data Access', 'Education Data Algorithm'], 1],
      ['Which plot is best for showing distribution of a variable?', ['Histogram', 'Pie chart', 'Line graph', 'Bar chart'], 0],
      ['What is a machine learning model?', ['A program that learns from data', 'A database', 'A spreadsheet', 'A website'], 0],
      ['Which term means predicting a category output?', ['Regression', 'Classification', 'Correlation', 'Sampling'], 1],
      ['Which metric is commonly used for classification accuracy?', ['Accuracy score', 'Temperature', 'Distance', 'Speed'], 0],
      ['What does CSV stand for?', ['Comma Separated Values', 'Common Source Variables', 'Computer System Value', 'Column Sorting View'], 0],
      ['Which of these is a supervised learning task?', ['Clustering', 'Classification', 'Association', 'Compression'], 1],
      ['What is a feature in data science?', ['A characteristic used for prediction', 'A hardware port', 'A file format', 'A website URL'], 0],
      ['Which library is used for visualization in Python?', ['Matplotlib', 'NumPy', 'Pandas', 'Scikit-learn'], 0],
      ['What is overfitting?', ['Model memorizes training data too much', 'Data is stored too fast', 'Missing dataset', 'Low memory'], 0],
      ['What is the objective of regression?', ['Predict continuous values', 'Encrypt data', 'Create charts', 'Download files'], 0],
      ['Which is an example of unstructured data?', ['Text document', 'Excel sheet', 'CSV file', 'Database table'], 0],
      ['Which method helps split data into training and testing sets?', ['Sampling', 'Filtering', 'Normalization', 'Merging'], 0],
      ['What is missing value treatment?', ['Handling absent data entries', 'Removing code comments', 'Deleting headers', 'Downloading libraries'], 0],
      ['Which metric is often used in regression?', ['RMSE', 'Volume', 'MSE', 'Speed'], 0],
      ['What does AI stand for?', ['Automated Information', 'Artificial Intelligence', 'Advanced Interface', 'Analysis Integration'], 1],
      ['Which step comes after model training?', ['Model evaluation', 'Cooking', 'Printing', 'Deleting data'], 0]
    ],
    [
      ['Which Python library is used for numerical computing?', ['NumPy', 'Matplotlib', 'Pandas', 'Seaborn'], 0],
      ['Which statement about data science is correct?', ['It combines statistics, programming, and domain knowledge', 'It is only for hardware design', 'It replaces all mathematics', 'It avoids coding'], 0],
      ['What is the purpose of normalization?', ['Scale features to a similar range', 'Delete missing values', 'Write SQL queries', 'Create images'], 0],
      ['Which method is used to identify trends in data?', ['Visualization', 'Compression', 'Encryption', 'Conversion'], 0],
      ['What is a hypothesis in data science?', ['A tentative assumption', 'A database table', 'A source code comment', 'A Python function'], 0],
      ['Which is a common machine learning library?', ['Scikit-learn', 'HTML', 'CSS', 'PowerPoint'], 0],
      ['Which task is used to segment customers into groups?', ['Clustering', 'Regression', 'Sorting', 'Uploading'], 0],
      ['Which chart is used for comparing values across categories?', ['Bar chart', 'Histogram', 'Scatter plot', 'Heatmap'], 0],
      ['What is data wrangling?', ['Cleaning and transforming raw data', 'Writing graphics', 'Formatting papers', 'Watching videos'], 0],
      ['Which of the following is an example of structured data?', ['Relational database table', 'Podcast', 'Video', 'Image'], 0],
      ['What is a confusion matrix used for?', ['Model evaluation', 'Password generation', 'Database storage', 'File transfer'], 0],
      ['Which term means data quality issue?', ['Noise', 'Color', 'Font', 'Image'], 0],
      ['Which algorithm is primarily used for prediction?', ['Linear Regression', 'Merge Sort', 'BFS', 'Quick Sort'], 0],
      ['What is a label in supervised learning?', ['Target value', 'Color code', 'Machine name', 'Operating system'], 0],
      ['What is the main purpose of feature engineering?', ['Improve model accuracy', 'Delete code', 'Install drivers', 'Resize windows'], 0],
      ['Which plot shows relationship between two numerical variables?', ['Scatter plot', 'Histogram', 'Pie chart', 'Box plot'], 0],
      ['What is data preprocessing?', ['Preparing raw data for analysis', 'Backing up memory', 'Printing documents', 'Testing hardware'], 0],
      ['Which of the following is not a data type?', ['Integer', 'String', 'Classifier', 'Float'], 2],
      ['Which concept deals with making predictions based on past data?', ['Machine learning', 'Photoshop', 'Protocol design', 'Firewall'], 0],
      ['Why do we split data into train and test sets?', ['To evaluate generalization', 'To make files smaller', 'To reduce RAM', 'To create websites'], 0]
    ]
  ],
  'Electronics': [
    [
      ['Which component stores electric charge?', ['Resistor', 'Capacitor', 'Inductor', 'Transistor'], 1],
      ['What is the SI unit of resistance?', ['Volt', 'Ampere', 'Ohm', 'Watt'], 2],
      ['Which device allows current in one direction only?', ['Resistor', 'Diode', 'Capacitor', 'Inductor'], 1],
      ['A transistor has how many terminals?', ['2', '3', '4', '5'], 1],
      ['What does LED stand for?', ['Light Emitting Diode', 'Low Energy Device', 'Logic Entry Device', 'Light Extension Driver'], 0],
      ['Which material is commonly used as a semiconductor?', ['Copper', 'Silicon', 'Gold', 'Aluminum'], 1],
      ['What is the unit of capacitance?', ['Farad', 'Henry', 'Ohm', 'Coulomb'], 0],
      ['Which law relates current, voltage, and resistance?', ['Ohm’s Law', 'Newton’s Law', 'Faraday’s Law', 'Boyle’s Law'], 0],
      ['Which component opposes change in current?', ['Capacitor', 'Resistor', 'Inductor', 'Switch'], 2],
      ['Which signal is continuous in time and amplitude?', ['Digital', 'Analog', 'Binary', 'Pulse'], 1],
      ['What is the purpose of a rectifier?', ['Convert AC to DC', 'Store charge', 'Measure current', 'Amplify signals'], 0],
      ['Which component can amplify signals?', ['Resistor', 'Capacitor', 'Transistor', 'Fuse'], 2],
      ['What is the unit of electric current?', ['Volt', 'Watt', 'Ampere', 'Ohm'], 2],
      ['Which instrument measures voltage?', ['Ammeter', 'Voltmeter', 'Thermometer', 'Oscilloscope'], 1],
      ['What is the color code for ground in electronics?', ['Black', 'Green', 'Red', 'Blue'], 1],
      ['Which component is used as a switch in digital circuits?', ['MOSFET', 'Resistor', 'Diode', 'Inductor'], 0],
      ['What is a semiconductor diode used for?', ['Rectification', 'Storage', 'Cooling', 'Insulation'], 0],
      ['Which of these is a passive component?', ['Transistor', 'Diode', 'Resistor', 'FET'], 2],
      ['An oscillator produces what kind of signal?', ['Static signal', 'Alternating signal', 'Direct signal', 'No signal'], 1],
      ['What does IC stand for?', ['Integrated Circuit', 'Internal Control', 'Input Control', 'Integrated Component'], 0]
    ],
    [
      ['Which device stores energy in a magnetic field?', ['Inductor', 'Capacitor', 'Diode', 'Transformer'], 0],
      ['What is the output of a NOT gate when input is 1?', ['1', '0', 'Both', 'None'], 1],
      ['Which gate gives output 1 only when all inputs are 1?', ['AND', 'OR', 'NOT', 'XOR'], 0],
      ['Which gate gives output 1 when any input is 1?', ['AND', 'OR', 'NAND', 'NOR'], 1],
      ['Which logic gate is used for comparison?', ['XOR', 'AND', 'OR', 'NOR'], 0],
      ['What is the full form of AC?', ['Alternating Current', 'Applied Current', 'Active Circuit', 'Average Current'], 0],
      ['Which circuit converts digital signal to analog signal?', ['DAC', 'ADC', 'Rectifier', 'Oscillator'], 0],
      ['Which component protects a circuit from excessive current?', ['Fuse', 'Inductor', 'Capacitor', 'Transformer'], 0],
      ['Which parameter is measured in Hertz?', ['Voltage', 'Resistance', 'Frequency', 'Power'], 2],
      ['What is the unit of power?', ['Volt', 'Ohm', 'Watt', 'Ampere'], 2],
      ['Which material is a good conductor?', ['Plastic', 'Wood', 'Copper', 'Glass'], 2],
      ['Which one is a memory element?', ['Resistor', 'Capacitor', 'Flip-flop', 'Diode'], 2],
      ['What is the function of a transformer?', ['Change voltage level', 'Store charge', 'Control current', 'Generate heat'], 0],
      ['What does ADC stand for?', ['Analog to Digital Converter', 'Automatic Data Controller', 'Analog Data Circuit', 'Advanced Digital Code'], 0],
      ['Which of these is a digital device?', ['Thermocouple', 'Microcontroller', 'Potentiometer', 'LDR'], 1],
      ['Which quantity is measured by an ammeter?', ['Voltage', 'Resistance', 'Current', 'Power'], 2],
      ['What is the main purpose of grounding?', ['Safety and reference potential', 'Increase resistance', 'Decrease frequency', 'Induce noise'], 0],
      ['Which is a common use of a transistor?', ['Switching', 'Welding', 'Lifting', 'Filtering'], 0],
      ['What does PCB stand for?', ['Printed Circuit Board', 'Power Control Board', 'Pressurized Circuit Box', 'Portable Circuit Base'], 0],
      ['Which device converts mechanical energy into electrical energy?', ['Generator', 'Motor', 'Fuse', 'Resistor'], 0]
    ]
  ],
  TCS: [
    [
      ['What does TCS stand for in the context of IT?', ['Technology Consulting Services', 'Total Computer Systems', 'Technical Communication System', 'Telecom Control Services'], 0],
      ['Which of these is a software development model?', ['Waterfall', 'Potato', 'Notebook', 'Column'], 0],
      ['What is the purpose of an algorithm?', ['To solve a problem step by step', 'To print text', 'To form a table', 'To manage hardware'], 0],
      ['Which language is commonly used for web pages?', ['HTML', 'JDBC', 'SQL', 'RAM'], 0],
      ['What does SQL stand for?', ['Structured Query Language', 'Simple Query Logic', 'Sequential Query List', 'System Query Language'], 0],
      ['Which of the following is a database operation?', ['Insert', 'Bold', 'Copy', 'Close'], 0],
      ['What is the main goal of software testing?', ['To verify quality and correctness', 'To increase printer speed', 'To remove memory', 'To convert text'], 0],
      ['Which of these is a frontend technology?', ['CSS', 'MySQL', 'JDBC', 'Java Virtual Machine'], 0],
      ['What is a compiler?', ['A program that translates source code to machine code', 'A database', 'An operating system', 'A monitor'], 0],
      ['Which concept is used to secure data in a network?', ['Encryption', 'Compression', 'Sorting', 'Looping'], 0],
      ['What does API stand for?', ['Application Programming Interface', 'Advanced Program Instruction', 'Application Process Integration', 'Automatic Program Installation'], 0],
      ['What is the purpose of networking?', ['Connect computers and devices', 'Store data permanently', 'Upgrade monitors', 'Create folders'], 0],
      ['Which is an example of a database?', ['MySQL', 'Windows', 'Linux', 'Excel'], 0],
      ['What is an operating system?', ['Software that manages hardware and applications', 'A printer driver', 'A web browser', 'A spreadsheet'], 0],
      ['Which of these is used to store data permanently?', ['Hard disk', 'CPU cache', 'RAM', 'Register'], 0],
      ['What is debugging?', ['Finding and fixing errors in code', 'Designing UI', 'Creating folders', 'Writing notes'], 0],
      ['Which of the following is an example of a programming language?', ['Java', 'JPEG', 'PDF', 'PNG'], 0],
      ['What is the purpose of a backup?', ['Protect data from loss', 'Improve brightness', 'Delete files', 'Change language'], 0],
      ['What is the function of DNS?', ['Translate domain names to IP addresses', 'Create websites', 'Boot OS', 'Change colors'], 0],
      ['Which of the following is a cloud service concept?', ['Storage', 'Printer', 'RAM', 'Processor'], 0]
    ],
    [
      ['What is the purpose of version control?', ['Track code changes', 'Delete browser history', 'Upgrade hardware', 'Install fonts'], 0],
      ['Which protocol is used for web communication?', ['HTTP', 'FTP', 'SQL', 'BIOS'], 0],
      ['What is cybersecurity?', ['Protection of systems and data', 'Selling hardware', 'Writing emails', 'Designing websites'], 0],
      ['Which of these is a client-side technology?', ['JavaScript', 'Oracle', 'MongoDB', 'C++'], 0],
      ['What is a server?', ['A computer that provides services to clients', 'A type of monitor', 'An input device', 'A storage folder'], 0],
      ['Which of the following is a bug?', ['Error in code', 'A website menu', 'An IP address', 'A keyboard'], 0],
      ['What is the main advantage of modular programming?', ['Code reusability', 'Slow processing', 'Low memory', 'Less analysis'], 0],
      ['What is a flowchart?', ['A graphical representation of an algorithm', 'A text editor', 'A database table', 'A USB port'], 0],
      ['Which is a common use of JavaScript?', ['Dynamic web pages', 'Power supply', 'Printer calibration', 'Circuit design'], 0],
      ['Which concept is essential in object-oriented programming?', ['Class', 'Voltage', 'Switch', 'Router'], 0],
      ['What is a user interface?', ['The way a user interacts with software', 'A network cable', 'A disk drive', 'A compiler'], 0],
      ['Which term refers to software updates?', ['Patch', 'Corrupt', 'Reset', 'Sort'], 0],
      ['What does IDE stand for?', ['Integrated Development Environment', 'Internet Data Entry', 'Input Device Error', 'Interactive Database Engine'], 0],
      ['What is data integrity?', ['Accuracy and consistency of data', 'Screen brightness', 'File size', 'System time'], 0],
      ['Which is used to organize data in rows and columns?', ['Table', 'Loop', 'Compiler', 'Server'], 0],
      ['What does HTML help create?', ['Web pages', 'Programs', 'Hardware', 'Networks'], 0],
      ['Which is an example of a computer network?', ['LAN', 'Java', 'RAM', 'CPU'], 0],
      ['What is a firewall?', ['Security system that monitors traffic', 'File editor', 'Database connector', 'CPU cooler'], 0],
      ['Which of these is a test case?', ['A set of inputs and expected results', 'An email', 'A monitor cable', 'An OS file'], 0],
      ['What is scalability in software?', ['Ability to handle growth', 'Color brightness', 'Memory loss', 'Power failure'], 0]
    ]
  ],
  OS: [
    [
      ['What does OS stand for?', ['Operating System', 'Open Software', 'Output System', 'Online Service'], 0],
      ['Which is an example of an operating system?', ['Windows', 'Java', 'SQL', 'HTML'], 0],
      ['What is the function of the OS scheduler?', ['Manage process execution', 'Store data', 'Print documents', 'Run JavaScript'], 0],
      ['What is multitasking?', ['Running multiple processes simultaneously', 'Typing files', 'Saving data', 'Downloading videos'], 0],
      ['Which memory is volatile?', ['RAM', 'ROM', 'Hard disk', 'CD'], 0],
      ['What is a process in OS?', ['Running program instance', 'A file', 'A printer', 'A keyboard'], 0],
      ['What is the job of the kernel?', ['Manage system resources', 'Display images', 'Send emails', 'Compile code'], 0],
      ['What is deadlock?', ['A state where processes wait on each other indefinitely', 'A network cable error', 'A printer jam', 'A user login issue'], 0],
      ['Which device is used for input?', ['Keyboard', 'Monitor', 'Speaker', 'Printer'], 0],
      ['What is paging in operating systems?', ['Memory management technique', 'Printing technique', 'Network technique', 'File copying technique'], 0],
      ['Which OS concept allows multiple users to work?', ['Time sharing', 'Sorting', 'Merging', 'Uploading'], 0],
      ['Which is a file system operation?', ['Create', 'Compile', 'Encrypt', 'Resize'], 0],
      ['What is the purpose of a shell?', ['Command interpreter', 'Storage unit', 'Battery', 'Cooling fan'], 0],
      ['Which resource is managed by OS?', ['CPU', 'Internet', 'Printer', 'Mouse'], 0],
      ['What does DMA stand for?', ['Direct Memory Access', 'Double Memory Allocation', 'Digital Memory Array', 'Dynamic Memory Access'], 0],
      ['Which OS component handles user interfaces?', ['Shell', 'Kernel', 'Compiler', 'Cache'], 0],
      ['What is context switching?', ['Switching CPU from one process to another', 'Changing font style', 'Deleting files', 'Opening browser'], 0],
      ['Which of these is not an OS task?', ['Machine learning', 'Process scheduling', 'Memory management', 'File management'], 0],
      ['What is a thread?', ['A lightweight process', 'A printer', 'A web page', 'A cable'], 0],
      ['What is a device driver?', ['Software that controls hardware devices', 'A keyboard layout', 'A compiler', 'An antivirus tool'], 0]
    ],
    [
      ['What is virtual memory?', ['Memory abstraction using disk space', 'A type of CPU', 'Internet storage', 'A database'], 0],
      ['Which scheduling algorithm is preemptive?', ['Round Robin', 'FCFS', 'SJF', 'None of these'], 0],
      ['What is the purpose of swapping?', ['Move data between memory and disk', 'Refresh browser', 'Install apps', 'Send emails'], 0],
      ['Which state indicates a process is waiting for I/O?', ['Blocked', 'Ready', 'Running', 'Terminated'], 0],
      ['What is fragmentation?', ['Unused memory scattered across system', 'File deletion', 'Low brightness', 'Buffer overflow'], 0],
      ['Which is a single-user OS?', ['MS-DOS', 'Linux', 'Windows Server', 'Unix'], 0],
      ['What does I/O stand for?', ['Input/Output', 'Internet Operation', 'Internal Output', 'Input Only'], 0],
      ['Which component controls peripheral devices?', ['Device driver', 'Compiler', 'Browser', 'Spreadsheet'], 0],
      ['Which OS feature ensures security and resource isolation?', ['Protection', 'Formatting', 'Printing', 'Reboot'], 0],
      ['What is a semaphore?', ['Synchronization tool', 'Monitor cable', 'Type of memory', 'Display port'], 0],
      ['What is a page fault?', ['When a page is not in memory', 'When a printer fails', 'When a file is copied', 'When a user logs in'], 0],
      ['Which memory is non-volatile?', ['ROM', 'RAM', 'Cache', 'Register'], 0],
      ['What does CPU stand for?', ['Central Processing Unit', 'Computer Power Unit', 'Core Processing Utility', 'Central Program Utility'], 0],
      ['Which OS is open-source?', ['Linux', 'MS-DOS', 'Windows', 'IOS'], 0],
      ['Which scheduling policy gives each process a time slice?', ['Round Robin', 'Priority', 'FCFS', 'Shortest Job First'], 0],
      ['What is a mutex?', ['Mutual exclusion lock', 'Memory device', 'File system', 'Keyboard event'], 0],
      ['Which component organizes files on disk?', ['File system', 'Compiler', 'Printer', 'CPU'], 0],
      ['What is the role of the OS bootloader?', ['Load the operating system into memory', 'Launch browser', 'Write data', 'Increase volume'], 0],
      ['Which process state is active?', ['Running', 'Waiting', 'Ready', 'Blocked'], 0],
      ['Which of the following is a system call?', ['Open', 'Close', 'Read', 'All of the above'], 3]
    ]
  ]
};

const screens = {
  login: document.getElementById('loginScreen'),
  home: document.getElementById('homeScreen'),
  mock: document.getElementById('mockSelectionScreen'),
  exam: document.getElementById('examScreen'),
  result: document.getElementById('resultScreen')
};

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const selectedYearTitle = document.getElementById('selectedYearTitle');
const subjectGrid = document.getElementById('subjectGrid');
const mockListContainer = document.getElementById('mockListContainer');
const questionCard = document.getElementById('questionCard');
const questionCounter = document.getElementById('questionCounter');
const subjectLabel = document.getElementById('subjectLabel');
const testLabel = document.getElementById('testLabel');
const timerDisplay = document.getElementById('timer');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
const marksCount = document.getElementById('marksCount');
const performanceValue = document.getElementById('performanceValue');
const performanceText = document.getElementById('performanceText');
const resultDetails = document.getElementById('resultDetails');

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.classList.toggle('active', name === screenName);
  });
}

function showHomeScreen() {
  showScreen('home');
}

function showMockSelectionScreen() {
  renderSubjectButtons();
  selectedYearTitle.textContent = `${state.selectedYear} - Mock Test`;
  showScreen('mock');
}

function renderSubjectButtons() {
  subjectGrid.innerHTML = '';

  subjects.forEach((subject) => {
    const button = document.createElement('button');
    button.className = 'subject-card';
    button.textContent = subject;
    button.addEventListener('click', () => {
      state.selectedSubject = subject;
      renderMockTests(subject);
    });
    subjectGrid.appendChild(button);
  });
}

function renderMockTests(subject) {
  mockListContainer.innerHTML = '';
  mockListContainer.classList.remove('hidden');

  const tests = mockBank[subject];
  tests.forEach((testQuestions, index) => {
    const card = document.createElement('button');
    card.className = 'mock-test-card';
    card.innerHTML = `<small>${subject}</small><span>Mock Test ${index + 1}</span>`;
    card.addEventListener('click', () => {
      state.selectedTest = `Mock Test ${index + 1}`;
      startExam(subject, testQuestions);
    });
    mockListContainer.appendChild(card);
  });
}

function startExam(subject, questions) {
  state.selectedSubject = subject;
  state.currentQuestions = questions;
  state.answers = Array(questions.length).fill(undefined);
  state.currentIndex = 0;
  state.timer = 1200;
  clearInterval(state.timerId);

  subjectLabel.textContent = subject;
  testLabel.textContent = state.selectedTest;
  questionCounter.textContent = `Question ${state.currentIndex + 1} / ${questions.length}`;
  renderQuestion();
  startTimer();
  showScreen('exam');
}

function renderQuestion() {
  const questionData = state.currentQuestions[state.currentIndex];
  const selectedAnswer = state.answers[state.currentIndex];

  questionCounter.textContent = `Question ${state.currentIndex + 1} / ${state.currentQuestions.length}`;
  questionCard.innerHTML = `
    <h4>${questionData[0]}</h4>
    <div class="option-list">
      ${questionData[1].map((option, index) => `
        <label class="option-item">
          <input type="radio" name="answer" value="${index}" ${selectedAnswer === index ? 'checked' : ''} />
          <span>${option}</span>
        </label>
      `).join('')}
    </div>
  `;

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const submitBtn = document.getElementById('submitBtn');
  const showResultBtn = document.getElementById('showResultBtn');

  prevBtn.disabled = state.currentIndex === 0;
  prevBtn.style.opacity = state.currentIndex === 0 ? '0.5' : '1';

  nextBtn.textContent = state.currentIndex === state.currentQuestions.length - 1 ? 'Last Question' : 'Next';
  submitBtn.style.display = state.currentIndex === state.currentQuestions.length - 1 ? 'inline-flex' : 'none';
  showResultBtn.style.display = state.currentIndex === state.currentQuestions.length - 1 ? 'inline-flex' : 'none';

  questionCard.querySelectorAll('input[name="answer"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const value = Number(event.target.value);
      state.answers[state.currentIndex] = value;
    });
  });
}

function nextQuestion() {
  const checked = questionCard.querySelector('input[name="answer"]:checked');
  if (checked) {
    state.answers[state.currentIndex] = Number(checked.value);
  }

  if (state.currentIndex < state.currentQuestions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
}

function previousQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function startTimer() {
  state.timerId = setInterval(() => {
    state.timer -= 1;
    if (state.timer <= 0) {
      clearInterval(state.timerId);
      showResults();
      return;
    }

    const minutes = Math.floor(state.timer / 60);
    const seconds = state.timer % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);
}

function calculateResults() {
  let correct = 0;
  let wrong = 0;

  state.currentQuestions.forEach((question, index) => {
    const selected = state.answers[index];
    if (selected === undefined) {
      wrong += 1;
      return;
    }

    if (selected === question[2]) {
      correct += 1;
    } else {
      wrong += 1;
    }
  });

  const totalQuestions = state.currentQuestions.length;
  const totalMarks = correct;
  const percentage = Math.round((correct / totalQuestions) * 100);

  return { correct, wrong, totalQuestions, totalMarks, percentage };
}

function showResults() {
  clearInterval(state.timerId);
  const result = calculateResults();
  const { correct, wrong, totalMarks, percentage } = result;

  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  marksCount.textContent = totalMarks;
  performanceValue.textContent = `${percentage}%`;

  if (percentage >= 80) {
    performanceText.textContent = 'Excellent performance! You have a strong understanding of the subject and are ready for advanced practice.';
  } else if (percentage >= 60) {
    performanceText.textContent = 'Good progress! Your performance is encouraging, and a little more revision can help you score even higher.';
  } else if (percentage >= 40) {
    performanceText.textContent = 'Fair performance. Focus on revising weak areas and attempt more mock tests for consistent improvement.';
  } else {
    performanceText.textContent = 'Needs attention. Review the concepts, practice more questions, and attempt a fresh mock test soon.';
  }

  resultDetails.innerHTML = state.currentQuestions.map((question, index) => {
    const selected = state.answers[index];
    const userChoice = selected !== undefined ? question[1][selected] : 'No answer';
    const correctChoice = question[1][question[2]];
    const status = selected === question[2] ? 'Correct' : 'Incorrect';

    return `
      <div class="result-item">
        <p><strong>Q${index + 1}:</strong> ${question[0]}</p>
        <p><strong>Your Answer:</strong> ${userChoice}</p>
        <p><strong>Correct Answer:</strong> ${correctChoice}</p>
        <p><strong>Status:</strong> ${status}</p>
      </div>
    `;
  }).join('');

  showScreen('result');
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  state.logInName = usernameInput.value.trim();
  if (!state.logInName) {
    alert('Please enter valid username.');
    return;
  }

  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    alert('Please fill email and password fields.');
    return;
  }

  showHomeScreen();
});

document.querySelectorAll('.year-card').forEach((button) => {
  button.addEventListener('click', () => {
    state.selectedYear = button.dataset.year;
    showMockSelectionScreen();
  });
});

document.getElementById('goToYearsBtn').addEventListener('click', () => {
  const yearSection = document.getElementById('yearSection');
  yearSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('helpBtn').addEventListener('click', () => {
  alert('Help Desk: For exam queries, contact support@examportal.edu or visit the college admin office.');
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  loginForm.reset();
  state.selectedYear = '';
  state.selectedSubject = '';
  state.selectedTest = '';
  showScreen('login');
});

document.getElementById('mockBackBtn').addEventListener('click', () => {
  showHomeScreen();
});

document.getElementById('examBackBtn').addEventListener('click', () => {
  showMockSelectionScreen();
  clearInterval(state.timerId);
});

document.getElementById('resultHomeBtn').addEventListener('click', () => {
  showHomeScreen();
});

document.querySelectorAll('.back-home').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    showHomeScreen();
  });
});

document.getElementById('prevBtn').addEventListener('click', previousQuestion);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('submitBtn').addEventListener('click', showResults);
document.getElementById('showResultBtn').addEventListener('click', showResults);

showScreen('login');
