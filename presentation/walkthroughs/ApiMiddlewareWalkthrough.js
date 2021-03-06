import React from 'react'
import CodeSlide from 'spectacle-code-slide'

const NoteWrapper = ({ children }) => {
  return (
    <div style={{ marginTop: '150px' }}>
      {children}
    </div>
  )
}

const makeRanges = (ranges) => {
  return ranges.map((range) => {
    if (!range.notes) {
      return range
    }
    return {
      ...range,
      notes: <NoteWrapper>{range.notes}</NoteWrapper>
    }
  })
}

const ApiMiddlewareWalkthrough = ({ children, ...otherProps }) => {
  return (
    <CodeSlide
      {...otherProps}
      transition={[]}
      lang="javascript"
      code={require('!raw-loader!../examples/apiCallMiddleware.js')}
      ranges={makeRanges([
        { loc: [0, 0], title: 'Middleware Example', note: 'Use up and down arrow keys to navigate' },
        { loc: [3, 8], title: 'Actions', notes: 'CALL_API + type creator' },
        { loc: [9, 10], title: 'Middleware Signature', notes: 'Funky chain of functions' },
        { loc: [10, 13], title: 'Type Check', notes: 'If not API call, pass to next' },
        { loc: [13, 17], title: 'Request Config', notes: 'Request config, action types' },
        { loc: [17, 18], title: 'Request Start Action', notes: 'Fire start w/ next' },
        { loc: [18, 19], title: 'Make Request', notes: 'Make actual request' },
        { loc: [19, 23], title: 'Request Success Action', notes: 'On success, dispatch success action with response data' },
        { loc: [23, 27], title: 'Request Failure Action', notes: 'On failure, dispatch failure action with error message' },
      ])}
      notes={<NoteWrapper>{children}</NoteWrapper>}
    />
  )
}

export default ApiMiddlewareWalkthrough