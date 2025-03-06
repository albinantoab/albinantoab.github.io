import './App.css'

function App() {
  const startDate = new Date('2016-04-01');
  const currentDate = new Date();

  // Calculate years and months difference
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  // Adjust years and months if current month is less than start month
  if (months < 0) {
    years--;
    months += 12;
  }

  return (
    <main className='flex flex-col items-center justify-center'>
      <div>
        <div className='line'>
          <span className='keywords'>class</span>
          <span className='properties'>Albin</span>
          <span className='curly-braces curly-braces-open'>{`{`}</span>
        </div>

        <div className='class-body'>
          <div className='line'>
            <span className='comments'>/**</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'> * Professional properties</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'>*/</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>title</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"Software Engineer"</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>experience</span>
            <span className='symbols'>:</span>
            <span className='types'>number</span>
            <span className='equal-sign'>=</span>
            <span className='value'>{years}</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>skills</span>
            <span className='symbols'>:</span>
            <span className='types'>string[]</span>
            <span className='equal-sign'>=</span>
            <span className='value'>[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MySQL",
              "PHP",
              "MongoDB",
              "Ionic"
              ]</span>
          </div>
          <div className='line'></div>
          <div className='line'>
            <span className='comments'>/**</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'> * Personal properties</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'>*/</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>fullName</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"Albin Anto"</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>location</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"Bangalore, Karnataka, India"</span>
          </div>
          <div className='line'></div>
          <div className='line'>
            <span className='comments'>/**</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'> * Contact properties</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'>*/</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>email</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"albinanto@gmail.com"</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>phone</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"+91 8867114110"</span>
          </div>
          <div className='line'></div>   
          <div className='line'>
            <span className='comments'>/**</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'> * Social properties</span>
          </div>
          <div className='line'>
            <span className='comments'> * </span>
          </div>
          <div className='line'>
            <span className='comments'>*/</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>website</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"https://albinantoab.github.io"</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>github</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"https://github.com/albinantoab"</span>
          </div>

          <div className='line'>
            <span className='keywords'>static</span>
            <span className='properties'>linkedin</span>
            <span className='symbols'>:</span>
            <span className='types'>string</span>
            <span className='equal-sign'>=</span>
            <span className='value'>"https://www.linkedin.com/in/albin-anto-bb226a13a"</span>
          </div>

        </div>
        <div className='line'>
          <span className='curly-braces'>{`}`}</span>
        </div>
      </div>
    </main>
  )
}

export default App
