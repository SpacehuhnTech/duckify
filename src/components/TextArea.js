import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DownloadIcon from '@mui/icons-material/Download'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const TextArea = (props) => {

    return (
        <Box>
            <label for="textarea" style={{
                color: '#aaa',
                display: 'block',
                textAlign: 'center',
            }}>
                {props.title}
                <textarea
                    onChange={(e) => props.setValue(e.target.value)}
                    value={props.value}
                    style={{
                        minHeight: '10rem',
                        height: 'calc(100vh - 208px)',
                        width: '100%',
                        resize: 'none',
                    }}
                />
            </label>

            <Grid
                container
                direction='row'
                justifyContent='flex-end'
                alignItems='flex-start'
                sx={{ mt: -6, mb: 1, pr: .5 }}>
                <Grid item>
                    <IconButton
                        onClick={props.onCopy}
                        aria-label='copy'>
                        <ContentCopyIcon />
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton
                        onClick={props.onDownload}
                        aria-label='download'>
                        <DownloadIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TextArea