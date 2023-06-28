import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorContext, QueryContext, LanguageContext } from 'context'
import { Home, Error, RotateControl, Loading } from 'pages'

export const App: FC = () => {
  return (
    <ErrorContext>
      <QueryContext>
        <LanguageContext>
          <Loading>
            <RotateControl>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='*' element={<Error text='Страница не найдена' />} />
                </Routes>
              </BrowserRouter>
            </RotateControl>
          </Loading>
        </LanguageContext>
      </QueryContext>
    </ErrorContext>
  )
}
