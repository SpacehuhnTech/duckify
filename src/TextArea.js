import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import DownloadIcon from '@mui/icons-material/Download'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const TextArea = (props) => {
    return (
        <Box>
            <Typography
                variant='overline'
                component='h2'
                align='center'
                sx={{
                    marginBottom: '-2.5em',
                    color: '#aaa',
                }}>
                {props.title}
            </Typography>

            <TextField
                multiline
                fullWidth
                onChange={(e) => props.setValue(e.target.value)}
                minRows={14}
                maxRows={14}
                value={props.value}
                InputProps={{
                    style: {
                        paddingTop: 20,
                        paddingRight: 1,
                        paddingBottom: 5,
                    }
                }}
            />

            <Grid
                container
                direction='row'
                justifyContent='flex-end'
                alignItems='flex-start'
                sx={{ mt: -5 }}>
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